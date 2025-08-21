import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Production-ready CORS configuration
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, etc.)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            // Development origins
            'http://localhost:5173',
            'http://localhost:4173',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            
            // Production origins - YOUR ACTUAL DOMAIN
            'https://pnt.inveast.net',
            'https://www.pnt.inveast.net',
        ];
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Security headers for production
if (NODE_ENV === 'production') {
    app.use((req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        next();
    });
}

// Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - ${req.ip}`);
    next();
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Panatrade Prestasi Backend API',
        version: '1.0.0',
        environment: NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

// reCAPTCHA verification endpoint
app.post('/api/verify-recaptcha', async (req, res) => {
    try {
        const { recaptchaToken } = req.body;
        
        console.log('🔍 Received verification request:', {
            hasToken: !!recaptchaToken,
            tokenLength: recaptchaToken ? recaptchaToken.length : 0,
            ip: req.ip,
            userAgent: req.get('User-Agent')
        });
        
        if (!recaptchaToken) {
            console.log('❌ No reCAPTCHA token provided');
            return res.status(400).json({
                success: false,
                error: 'reCAPTCHA token is required'
            });
        }

        // Check if secret key is available
        if (!process.env.RECAPTCHA_SECRET_KEY) {
            console.error('❌ RECAPTCHA_SECRET_KEY not found in environment variables');
            return res.status(500).json({
                success: false,
                error: 'Server configuration error'
            });
        }
        
        console.log('🔍 Verifying reCAPTCHA token with Google...');
        
        // Verify with Google
        const response = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: process.env.RECAPTCHA_SECRET_KEY,
                    response: recaptchaToken,
                    remoteip: req.ip
                },
                timeout: 10000
            }
        );
        
        const { success, score, action, 'error-codes': errorCodes } = response.data;
        
        console.log('📝 reCAPTCHA response:', {
            success,
            score: score || 'N/A (v2)',
            action: action || 'N/A (v2)',
            errorCodes: errorCodes || 'None'
        });
        
        if (success) {
            console.log('✅ reCAPTCHA verification successful');
            res.json({
                success: true,
                score: score,
                message: 'reCAPTCHA verification successful'
            });
        } else {
            console.log('❌ reCAPTCHA verification failed:', errorCodes);
            
            res.status(400).json({
                success: false,
                error: 'reCAPTCHA verification failed',
                details: errorCodes || []
            });
        }
    } catch (error) {
        console.error('💥 reCAPTCHA verification error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        res.status(500).json({
            success: false,
            error: 'Internal server error during reCAPTCHA verification',
            details: NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: NODE_ENV,
        port: PORT,
        hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
        nodeVersion: process.version
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.originalUrl,
        method: req.method
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        error: 'Internal server error',
        details: NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📧 Ready to verify reCAPTCHA tokens`);
    console.log(`🔧 Environment: ${NODE_ENV}`);
    console.log(`🔑 reCAPTCHA Secret Key: ${process.env.RECAPTCHA_SECRET_KEY ? 'Loaded' : 'Missing'}`);
    console.log(`🌐 CORS configured for production and development`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('👋 SIGINT received, shutting down gracefully');
    process.exit(0);
});
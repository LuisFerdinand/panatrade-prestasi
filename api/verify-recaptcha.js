import axios from 'axios';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { recaptchaToken } = req.body;
        
        console.log('🔍 Received verification request:', {
            hasToken: !!recaptchaToken,
            tokenLength: recaptchaToken ? recaptchaToken.length : 0,
            ip: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            userAgent: req.headers['user-agent']
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
                    remoteip: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress
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
            details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        });
    }
}
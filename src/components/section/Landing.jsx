const Landing = () => {
    return (
        <section className="flex items-center justify-center bg-black">
            <div className="w-full h-full relative">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/videos/landing_video.mp4" type="video/mp4" />
                    <source src="/assets/videos/landing-video.webm" type="video/webm" />
                    {/* Fallback message for browsers that don't support video */}
                    <div className="flex items-center justify-center h-full bg-gray-900 text-white">
                        <p className="text-xl">Your browser does not support the video tag.</p>
                    </div>
                </video>

                {/* Optional: Add a subtle overlay if needed */}
                <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
            </div>
        </section>
    )
}

export default Landing
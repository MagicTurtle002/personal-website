import React, { useState, useEffect, useRef } from 'react';

const UnderConstructionSection = ({ sectionName = "Under Construction" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8" ref={sectionRef}>
        {/* Floating Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 relative">
          <div 
            className={`text-center relative z-10 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '300ms'
            }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              {sectionName}
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-medium">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
          background-size: 30px 30px;
          animation: grid-move 25s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
    </section>
  );
};

export default UnderConstructionSection;

import { useEffect, useState } from 'react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/60b58473-c564-4827-97cb-3a882d6042b8.png",
      alt: "Parlay - Social Media Marketing Overview"
    },
    {
      src: "/lovable-uploads/ad9edfd1-1c7a-4581-a951-cfc595e689e2.png",
      alt: "Parlay - Table of Contents"
    },
    {
      src: "/lovable-uploads/92afc926-008b-4563-a546-0066a337f385.png",
      alt: "Introduction - Parlay Agency"
    },
    {
      src: "/lovable-uploads/e5f3339d-10fa-4590-bfd8-b591d4690424.png",
      alt: "ZTH Training Growth Story"
    },
    {
      src: "/lovable-uploads/c4989e2e-ce85-4ddb-989d-fd9a87756740.png",
      alt: "Social Media Stats - 24.7M+ Views"
    },
    {
      src: "/lovable-uploads/7d41b1c8-80d2-456d-9414-cb04feb10a4a.png",
      alt: "Social Media Stats - Player Accelerator"
    },
    {
      src: "/lovable-uploads/51dd6142-898e-4a08-b854-a61674aab4e8.png",
      alt: "Social Media Stats - YouTube Analytics"
    },
    {
      src: "/lovable-uploads/a29835c2-3cfb-4819-b89f-d2f3c53d110d.png",
      alt: "Project Objectives"
    },
    {
      src: "/lovable-uploads/7c26070c-f30c-4ddb-bf4d-9440a8ad82e6.png",
      alt: "Key Achievements and Results"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.image-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add custom styles to document head
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #2563eb, #7c3aed);
      }
      
      html {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              document.getElementById(`section-${index}`)?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-out"
          style={{ width: `${((currentSection + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Image Sections */}
      {images.map((image, index) => (
        <section
          key={index}
          id={`section-${index}`}
          className="image-section min-h-screen flex items-center justify-center p-8 snap-start relative overflow-hidden"
        >
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
              style={{
                top: '20%',
                left: '10%',
                transform: `translateY(${currentSection === index ? 0 : 50}px)`,
                transition: 'transform 0.8s ease-out'
              }}
            />
            <div 
              className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"
              style={{
                bottom: '20%',
                right: '10%',
                transform: `translateY(${currentSection === index ? 0 : -50}px)`,
                transition: 'transform 0.8s ease-out'
              }}
            />
          </div>

          {/* Image Container */}
          <div 
            className={`relative max-w-6xl w-full transform transition-all duration-1000 ease-out ${
              currentSection === index 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-70 translate-y-8 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-2xl shadow-2xl shadow-black/50 border border-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/90 text-sm font-medium">
                {index + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Scroll Indicator (only on first image) */}
          {index === 0 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center text-white/60">
                <span className="text-sm mb-2 font-light">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Index;

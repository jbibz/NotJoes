import React, { useState } from 'react';

// Helper Components & SVGs
// --- Icon Components (replaces lucide-react and font-awesome) ---

const MapMarkerAltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0zM192 272a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
  </svg>
);

const XTwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
);

const Icon = ({ children, className }) => <div className={className}>{children}</div>;
const Server = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg></Icon>;
const Zap = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></Icon>;
const Heart = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></Icon>;
const Wrench = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></Icon>;
const ChevronLeft = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></Icon>;
const ChevronRight = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></Icon>;
const Star = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></Icon>;
const Calendar = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></Icon>;
const Clock = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></Icon>;
const ArrowRight = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Icon>;
const Mail = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></Icon>;
const Phone = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></Icon>;
const MapPin = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></Icon>;
const Send = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></Icon>;
const ExternalLink = (props) => <Icon {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></Icon>;


// --- UI Card Components (created based on usage) ---

const StatCard = ({ icon, number, label }) => (
  <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 text-center transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
    <div className="flex justify-center mb-4">{icon}</div>
    <p className="text-4xl font-black">{number}</p>
    <p className="text-gray-600 font-medium">{label}</p>
  </div>
);

const EmojiCard = ({ emoji }) => (
  <div className="w-64 h-64 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] flex items-center justify-center transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
    <span className="text-9xl">{emoji}</span>
  </div>
);

const SkillCard = ({ icon, name, level, levelColor, description, stars }) => (
  <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] space-y-4">
    <div className="flex items-center gap-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-2xl font-black">{name}</h3>
        <span className={`text-sm font-bold px-2 py-1 rounded-full text-black ${levelColor}`}>{level}</span>
      </div>
    </div>
    <p className="text-gray-700">{description}</p>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-6 h-6 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
      ))}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 text-center transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] flex flex-col items-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h4 className="text-xl font-black mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ProjectCard = ({ title, description, technologies, bgColor, textColor, projectId }) => (
  <div className={`relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8 ${bgColor} ${textColor} transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]`}>
    <div className="absolute -top-5 -left-5 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center text-3xl font-black text-black">
      {projectId}
    </div>
    <h3 className="text-4xl font-black mb-4 mt-8">{title}</h3>
    <p className="max-w-3xl mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {technologies.map((tech, index) => (
        <span key={index} className={`px-3 py-1 rounded-full text-sm font-bold ${textColor === 'text-white' ? 'bg-black/20' : 'bg-white/50'}`}>
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <button className="bg-white text-black border-4 border-black rounded-xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3 flex items-center gap-2">
        <ExternalLink className="w-5 h-5" /> View Project
      </button>
      <button className="bg-white text-black border-4 border-black rounded-xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3 flex items-center gap-2">
        <GithubIcon className="w-5 h-5" /> GitHub
      </button>
    </div>
  </div>
);

const SimpleProjectCard = ({ title, description, technologies }) => (
  <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
    <h4 className="text-2xl font-black mb-2">{title}</h4>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-xs font-bold text-gray-700">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// --- Page Section Components ---

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#faf9f6] overflow-hidden flex items-center">
      <div className="absolute w-32 h-32 bg-[#ff6b35] rounded-full border-4 border-black top-10 right-10 lg:z-auto -z-10"></div>
      <div className="absolute w-20 h-20 bg-[#4ecdc4] rounded-full border-4 border-black top-32 right-32 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#ffe66d] rounded-full border-4 border-black top-20 right-52 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#ffe66d] border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000]">
              <MapMarkerAltIcon className="w-5 h-5" />
              Oklahoma
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text">Joe</span><br />
                <span className="gradient-text">Smith</span><span className="text-black">|</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4ecdc4]">
                IT Enterprise Admin Student | Self-Hosting Enthusiast
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Student of IT Enterprise Administration at Francis Tuttle, passionate about self-hosting, home labs, and creative projects. Entrepreneur behind Flavor Junkie, a handcrafted seasoning company that blends tech innovation with culinary creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button onClick={() => scrollToSection('contact')} className="bg-[#ff6b35] text-white border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto">Get In Touch</button>
              <button onClick={() => scrollToSection('projects')} className="bg-white text-[#4ecdc4] border-4 border-[#4ecdc4] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto">View Projects</button>
              <a href="https://flavorjunkie.co" target="_blank" rel="noopener noreferrer" className="bg-[#ffe66d] text-black border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto text-center">Flavor Junkie</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-16 h-16 border-4 border-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#333]"><GithubIcon className="w-8 h-8 text-white" /></a>
              <a href="#" className="w-16 h-16 border-4 border-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#0077b5]"><LinkedinIcon className="w-8 h-8 text-white" /></a>
              <a href="#" className="w-16 h-16 border-4 border-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-black"><XTwitterIcon className="w-8 h-8 text-white" /></a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] w-80 h-80 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#4ecdc4] to-[#ff6b35] flex items-center justify-center">
                  <span className="text-8xl font-black text-white">JS</span>
                </div>
              </div>
              <div className="absolute w-12 h-12 bg-[#4ecdc4] rounded-full border-4 border-black -top-6 -left-6 -z-10"></div>
              <div className="absolute w-8 h-8 bg-[#ff6b35] rounded-full border-4 border-black -top-4 -right-4 -z-10"></div>
              <div className="absolute w-10 h-10 bg-[#ffe66d] rounded-full border-4 border-black -bottom-5 -left-5 -z-10"></div>
              <div className="absolute w-6 h-6 bg-[#4ecdc4] rounded-full border-4 border-black -bottom-3 -right-3 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const stats = [
    { icon: <Server className="w-8 h-8 text-[#4ecdc4]" />, number: "15+", label: "Homelab Projects" },
    { icon: <Zap className="w-8 h-8 text-[#ff6b35]" />, number: "3+", label: "Years Learning" },
    { icon: <Heart className="w-8 h-8 text-[#ffe66d]" />, number: "1", label: "Seasoning Company" },
    { icon: <Wrench className="w-8 h-8 text-[#4ecdc4]" />, number: "10+", label: "Docker Containers" }
  ];

  const highlights = [
    { icon: "🎓", text: "Currently studying IT Enterprise Administration at Francis Tuttle" },
    { icon: "💻", text: "Self-hosting enthusiast with extensive homelab experience" },
    { icon: "🐳", text: "Docker expert with containerized application deployments" },
    { icon: "🌶️", text: "Entrepreneur behind Flavor Junkie handcrafted seasonings" }
  ];

  return (
    <section id="about" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute w-24 h-24 bg-[#4ecdc4] rounded-full border-4 border-black top-20 left-10 -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#ffe66d] rounded-full border-4 border-black bottom-20 right-20 -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000]">
              <Heart className="w-5 h-5 text-[#ff6b35]" /> About Me
            </div>
            <h2 className="text-5xl lg:text-6xl font-black"><span className="gradient-text">My Story</span></h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>Hey there! I'm Joe, a passionate IT student at Francis Tuttle with a love for all things tech and creative. My journey started with curiosity about how things work behind the scenes, which led me down the rabbit hole of self-hosting and homelab adventures.</p>
              <p>When I'm not diving deep into Docker containers or setting up new network configurations, you'll find me in the kitchen experimenting with flavors for my entrepreneurial venture, Flavor Junkie. It's a handcrafted seasoning company where I blend my technical precision with culinary creativity.</p>
              <p>I believe technology should enhance our lives, and I'm passionate about building systems that are both powerful and accessible. Whether it's troubleshooting a complex network issue or perfecting a new spice blend, I approach every challenge with enthusiasm and attention to detail.</p>
            </div>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35] border-4 border-black rounded-full flex items-center justify-center text-xl">{highlight.icon}</div>
                  <p className="text-gray-700 font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex justify-center"><EmojiCard emoji="🤔" /></div>
            <div className="text-center">
              <h3 className="text-3xl font-black mb-2">Let's Connect</h3>
              <div className="w-16 h-1 bg-[#4ecdc4] mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const tabs = [
    { id: 'technical', label: '💻 Technical', emoji: '💻' }, { id: 'creative', label: '🎨 Creative', emoji: '🎨' },
    { id: 'tools', label: '🛠️ Tools', emoji: '🛠️' }, { id: 'soft', label: '🤝 Soft Skills', emoji: '🤝' }
  ];
  // Skill data...
  const skills = {
    technical: [
      { icon: '🏢', name: 'IT Enterprise Admin', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'System administration & enterprise management', stars: 4 },
      { icon: '🐳', name: 'Docker', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Containerization & orchestration', stars: 5 },
      { icon: '🌐', name: 'Networking', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Network configuration & troubleshooting', stars: 4 },
      { icon: '🏠', name: 'Self-Hosting', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Homelab setup & service deployment', stars: 5 },
      { icon: '🔧', name: 'Troubleshooting', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Problem diagnosis & resolution', stars: 5 },
      { icon: '📊', name: 'Monitoring', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'System monitoring & dashboards', stars: 3 }
    ],
    creative: [
      { icon: '🎨', name: 'Branding', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Brand identity & visual design', stars: 4 },
      { icon: '🖼️', name: 'Design', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'UI/UX & graphic design', stars: 3 },
      { icon: '🚀', name: 'Entrepreneurship', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Business development & innovation', stars: 4 },
      { icon: '🌶️', name: 'Product Development', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Recipe creation & product design', stars: 5 },
      { icon: '📸', name: 'Content Creation', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'Photography & marketing content', stars: 3 },
      { icon: '📝', name: 'Copywriting', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'Marketing & technical writing', stars: 3 }
    ],
    tools: [
      { icon: '🐧', name: 'Linux', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Command line & system administration', stars: 4 },
      { icon: '📊', name: 'Proxmox', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Virtualization platform management', stars: 4 },
      { icon: '🔍', name: 'Grafana', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'Data visualization & monitoring', stars: 3 },
      { icon: '🔐', name: 'pfSense', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'Firewall & network security', stars: 3 },
      { icon: '☁️', name: 'Cloud Services', level: 'Proficient', levelColor: 'bg-[#ffe66d]', description: 'AWS, Azure, and cloud deployment', stars: 3 },
      { icon: '📱', name: 'Mobile Apps', level: 'Beginner', levelColor: 'bg-[#ccc]', description: 'iOS & Android development basics', stars: 2 }
    ],
    soft: [
      { icon: '🧠', name: 'Problem Solving', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Analytical thinking & creative solutions', stars: 5 },
      { icon: '📚', name: 'Continuous Learning', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Staying current with technology trends', stars: 5 },
      { icon: '🎯', name: 'Project Management', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Planning & executing complex projects', stars: 4 },
      { icon: '💬', name: 'Communication', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Technical & business communication', stars: 4 },
      { icon: '🤝', name: 'Collaboration', level: 'Advanced', levelColor: 'bg-[#4ecdc4]', description: 'Team work & knowledge sharing', stars: 4 },
      { icon: '⚡', name: 'Adaptability', level: 'Expert', levelColor: 'bg-[#ff6b35]', description: 'Quick learning & flexibility', stars: 5 }
    ]
  };

  const features = [
    { icon: '🏠', title: 'Homelab Expertise', description: 'Self-hosted services, Docker, and virtualization' },
    { icon: '🎓', title: 'Academic Foundation', description: 'IT Enterprise Administration at Francis Tuttle' },
    { icon: '🌶️', title: 'Creative Entrepreneur', description: 'Flavor Junkie seasoning company founder' },
    { icon: '🔧', title: 'Hands-On Experience', description: 'Real-world projects and practical applications' }
  ];

  return (
    <section id="skills" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute w-20 h-20 bg-[#ffe66d] rounded-full border-4 border-black top-10 left-20 -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#ff6b35] rounded-full border-4 border-black bottom-10 right-10 -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <span className="text-2xl">💪</span> MY SKILLS
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6"><span className="text-black">SKILLS </span><span className="gradient-text">ARSENAL</span></h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Technical expertise meets creative innovation</p>
        </div>
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 bg-white border-4 border-black rounded-2xl p-2 shadow-[6px_6px_0px_0px_#000000]">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-3 sm:px-6 py-3 rounded-xl font-bold transition-all duration-200 ${activeTab === tab.id ? 'bg-[#4ecdc4] text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]' : 'bg-white text-gray-700'}`}>
                <span className="sm:hidden">{tab.emoji}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills[activeTab]?.map((skill, index) => <SkillCard key={index} {...skill} />)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
    const projects = [
      { id: '01', title: 'Homelab Infrastructure', description: 'Complete self-hosted infrastructure with Docker containers, monitoring dashboards, and automated backups. Features Proxmox virtualization, pfSense firewall, and Grafana monitoring.', technologies: ['Docker', 'Proxmox', 'pfSense', 'Grafana', 'Linux'], bgColor: 'bg-gradient-to-br from-[#4ecdc4] to-[#ff6b35]', textColor: 'text-white' },
      { id: '02', title: 'Flavor Junkie Brand', description: 'Complete brand identity and product line for handcrafted seasoning company. Includes logo design, packaging, website, and marketing materials with a focus on artisanal quality.', technologies: ['Branding', 'Design', 'Photography', 'Marketing', 'E-commerce'], bgColor: 'bg-gradient-to-br from-[#ffe66d] to-[#ff6b35]', textColor: 'text-black' }
    ];
  
    const additionalProjects = [
      { title: 'Network Security Lab', description: 'Advanced network security testing environment with multiple VLANs, intrusion detection systems, and penetration testing tools for learning cybersecurity.', technologies: ['pfSense', 'VLANs', 'IDS/IPS', 'Kali Linux'] },
      { title: 'Automated Backup System', description: 'Comprehensive backup solution using Docker containers with automated scheduling, encryption, and cloud storage integration for data protection.', technologies: ['Docker', 'Bash Scripting', 'Cloud Storage', 'Encryption'] },
      { title: 'Recipe Development Platform', description: 'Digital platform for testing and documenting spice blend recipes with ingredient tracking, cost analysis, and customer feedback integration.', technologies: ['Recipe Management', 'Cost Analysis', 'Documentation', 'Testing'] },
      { title: 'Home Automation Hub', description: 'Smart home integration using self-hosted solutions for lighting, climate control, and security monitoring with mobile app control.', technologies: ['Home Assistant', 'IoT', 'Mobile Apps', 'Automation'] }
    ];
  
    return (
      <section id="projects" className="py-20 bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute w-32 h-32 bg-[#ff6b35] rounded-full border-4 border-black top-20 right-10 -z-10"></div>
        <div className="absolute w-20 h-20 bg-[#4ecdc4] rounded-full border-4 border-black bottom-20 left-10 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
              <Star className="w-5 h-5 text-yellow-500" /> Featured Work <span className="text-xl">🚀</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-6"><span className="gradient-text">My Projects</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Where technology meets creativity and innovation</p>
          </div>
          <div className="space-y-12 mb-20">
            {projects.map(project => <ProjectCard key={project.id} {...project} />)}
          </div>
          <div>
            <h3 className="text-3xl font-black mb-8 text-center"><span className="gradient-text">More Projects</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalProjects.map((project, index) => <SimpleProjectCard key={index} {...project} />)}
            </div>
          </div>
        </div>
      </section>
    );
};

const BlogSection = () => {
    const blogPosts = [
      { id: 1, title: 'Setting Up My First Docker Homelab', excerpt: 'Journey into containerization and how I transformed my old laptop into a powerful self-hosted infrastructure.', date: '2024-01-15', readTime: '5 min read', category: 'Homelab', bgColor: 'bg-[#4ecdc4]' },
      { id: 2, title: 'Flavor Junkie: From Idea to Product', excerpt: 'The entrepreneurial journey of creating a seasoning company, from recipe development to brand launch.', date: '2024-01-08', readTime: '8 min read', category: 'Entrepreneurship', bgColor: 'bg-[#ffe66d]' },
      { id: 3, title: 'Network Security Best Practices', excerpt: 'Essential security configurations for home networks and what I learned setting up pfSense.', date: '2024-01-01', readTime: '6 min read', category: 'Security', bgColor: 'bg-[#ff6b35]' }
    ];
  
    return (
      <section id="blog" className="py-20 bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute w-24 h-24 bg-[#ffe66d] rounded-full border-4 border-black top-10 right-20 -z-10"></div>
        <div className="absolute w-16 h-16 bg-[#4ecdc4] rounded-full border-4 border-black bottom-10 left-10 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
              <Calendar className="w-5 h-5 text-[#ff6b35]" /> Latest Updates <span className="text-xl">📝</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-6"><span className="gradient-text">Blog & Updates</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Sharing insights, learnings, and adventures in tech and entrepreneurship</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] overflow-hidden">
                <div className={`${post.bgColor} px-4 py-2 border-b-4 border-black`}>
                  <span className="font-bold text-black text-sm uppercase tracking-wide">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
                  </div>
                  <button className="w-full bg-[#ff6b35] text-white border-4 border-black rounded-xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-4 py-3 flex items-center justify-center gap-2">Read More <ArrowRight className="w-4 h-4" /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-white text-[#4ecdc4] border-4 border-[#4ecdc4] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg">View All Posts</button>
          </div>
        </div>
      </section>
    );
};
  
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'joe@example.com', link: 'mailto:joe@example.com' },
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Oklahoma, USA', link: null }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <GithubIcon className="w-6 h-6" />, url: '#', bgColor: 'bg-[#333]' },
    { name: 'LinkedIn', icon: <LinkedinIcon className="w-6 h-6" />, url: '#', bgColor: 'bg-[#0077b5]' },
    { name: 'Flavor Junkie', icon: <ExternalLink className="w-6 h-6" />, url: 'https://flavorjunkie.co', bgColor: 'bg-[#ff6b35]' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute w-32 h-32 bg-[#4ecdc4] rounded-full border-4 border-black top-10 left-10 -z-10"></div>
      <div className="absolute w-20 h-20 bg-[#ffe66d] rounded-full border-4 border-black bottom-10 right-20 -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Mail className="w-5 h-5 text-[#ff6b35]" /> Get In Touch <span className="text-xl">💬</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6"><span className="gradient-text">Let's Connect</span></h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Ready to collaborate on your next project or just want to chat about tech and entrepreneurship?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8">
            <h3 className="text-3xl font-black mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border-4 border-black rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]" placeholder="Your name"/>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border-4 border-black rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]" placeholder="your@email.com"/>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 border-4 border-black rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]" placeholder="What's this about?"/>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows="5" className="w-full px-4 py-3 border-4 border-black rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] resize-none" placeholder="Tell me about your project..."/>
              <button type="submit" className="w-full bg-[#ff6b35] text-white border-4 border-black rounded-xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-4 text-lg flex items-center justify-center gap-2">Send Message <Send className="w-5 h-5" /></button>
              {formStatus && <p className="text-center font-bold p-3 bg-green-200 border-4 border-black rounded-lg">{formStatus}</p>}
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8">
              <h3 className="text-3xl font-black mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4ecdc4] border-4 border-black rounded-full flex items-center justify-center text-white">{info.icon}</div>
                    <div>
                      <p className="font-bold text-gray-800">{info.label}</p>
                      {info.link ? <a href={info.link} className="text-gray-600 hover:text-[#4ecdc4] transition-colors">{info.value}</a> : <p className="text-gray-600">{info.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8">
              <h3 className="text-3xl font-black mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`w-16 h-16 ${social.bgColor} border-4 border-black rounded-2xl flex items-center justify-center text-white transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px]`} title={social.name}>{social.icon}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const quickLinks = [
      { name: 'About', href: '#about' }, { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' }, { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ];
    const socialLinks = [
      { name: 'GitHub', icon: <GithubIcon className="w-5 h-5" />, url: '#' },
      { name: 'LinkedIn', icon: <LinkedinIcon className="w-5 h-5" />, url: '#' }
    ];
  
    const scrollToSection = (id) => document.getElementById(id.replace('#', '')).scrollIntoView({ behavior: 'smooth' });
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <footer className="bg-white border-t-4 border-black relative overflow-hidden">
        <div className="absolute w-16 h-16 bg-[#4ecdc4] rounded-full border-4 border-black top-10 right-10 -z-10"></div>
        <div className="absolute w-12 h-12 bg-[#ffe66d] rounded-full border-4 border-black bottom-10 left-10 -z-10"></div>
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-2"><span className="gradient-text">Joe Smith</span></h3>
                <p className="text-gray-600 leading-relaxed">IT Enterprise Admin Student & Creative Entrepreneur. Building the future one container at a time.</p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ff6b35] border-4 border-black rounded-xl flex items-center justify-center text-white transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px]" title={social.name}>{social.icon}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button key={index} onClick={() => scrollToSection(link.href)} className="block text-gray-600 hover:text-[#4ecdc4] transition-colors font-medium">{link.name}</button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-xl font-black mb-6">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-600"><span className="font-bold">Email:</span><br /><a href="mailto:joe@example.com" className="hover:text-[#4ecdc4] transition-colors">joe@example.com</a></p>
                <p className="text-gray-600"><span className="font-bold">Location:</span><br />Oklahoma, USA</p>
                <p className="text-gray-600"><span className="font-bold">Flavor Junkie:</span><br /><a href="https://flavorjunkie.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4] transition-colors">flavorjunkie.co</a></p>
              </div>
            </div>
          </div>
          <div className="border-t-4 border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <span>© {currentYear} Joe Smith. Made with</span>
              <Heart className="w-4 h-4 text-[#ff6b35] fill-[#ff6b35]" />
              <span>and lots of coffee.</span>
            </div>
            <button onClick={scrollToTop} className="bg-[#4ecdc4] text-white border-4 border-black rounded-xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3">Back to Top ↑</button>
          </div>
        </div>
      </footer>
    );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* This is a global style for the gradient text used throughout the components */}
      <style>{`
        .gradient-text {
          background: -webkit-linear-gradient(45deg, #4ecdc4, #ff6b35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Simple scrollbar hiding for tabs */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


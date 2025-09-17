import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            TP
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tejaswini Penneni
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer 
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
             8+ years of experience building scalable enterprise applications with Java, Spring Boot, 
            React, Angular, and cloud technologies. Passionate about clean code and innovative solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/tejaswinipenneni"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/tejaswini-penneni2526/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:tejaswinipenneni@gmail.com"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
          >
            Learn More About Me
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-white hover:text-blue-300 transition-colors"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
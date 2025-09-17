import React from 'react';
import { Heart, Coffee, Code, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  TP
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hello! I'm Tejaswini Penneni, a full-stack developer.
               I specialize in building robust, 
                scalable enterprise applications using Java and modern web technologies. 
                My expertise spans the entire development lifecycle, from requirements 
                analysis to deployment and maintenance.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                 I have a proven track record of delivering high-quality software solutions 
                that drive business growth. My experience includes working with large-scale 
                distributed systems, implementing microservices architectures, and leading 
                cross-functional development teams.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                I'm passionate about clean code, best practices, and staying current with 
                emerging technologies. I believe in continuous learning and enjoy sharing 
                knowledge with fellow developers through mentoring and code reviews.
              </p>
            </div>

            {/* What I Love */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Love</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Palette className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Design</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Coffee className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Coffee</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
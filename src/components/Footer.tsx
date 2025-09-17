import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Code2 className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Tejaswini Penneni</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Tejaswini Penneni</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Crafting digital experiences with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
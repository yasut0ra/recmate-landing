import React from 'react';
import { Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            RecoMate
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                機能
              </a>
            </li>
            <li>
              <a 
                href="#tech" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                技術
              </a>
            </li>
            <li>
              <a 
                href="#roadmap" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                開発予定
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/yasut0ra/recomate" 
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-1" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

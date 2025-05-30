import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              RecoMate
            </h2>
            <p className="text-gray-400 max-w-md">
              あなたの好みを学習する次世代AIチャットアプリケーション
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">利用規約</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</a>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RecoMate AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
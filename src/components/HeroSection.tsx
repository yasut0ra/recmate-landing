import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                RecoMate
              </span>
              <br />
              <span className="text-gray-800">
                あなたの好みを学習する次世代AIチャット
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              バンディットアルゴリズムで学習し、表情と音声を融合させた、まるで人間のような自然な会話体験を提供します。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors flex items-center justify-center group">
                デモを見る
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                詳細を知る
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 opacity-60"></div>
              <div className="relative z-10 p-6 text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AI</span>
                </div>
                <p className="text-gray-700 mb-4">RecoMate App Interface</p>
                <p className="text-xs text-gray-500">実際のアプリのスクリーンショットがここに表示されます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
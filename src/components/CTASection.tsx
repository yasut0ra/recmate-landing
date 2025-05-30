import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          AIとの新しい対話体験を始めましょう
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          RecoMateは現在開発中です。最新情報やアーリーアクセスの案内をお届けします。
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="メールアドレスを入力" 
              className="px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 flex-grow focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center whitespace-nowrap">
              登録する
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
          <p className="text-sm mt-2 opacity-70">
            最新情報をお届けします。いつでも配信停止できます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { Brain, SliceIcon as VoiceIcon, HeartPulse, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-purple-600" />,
    title: "バンディットアルゴリズムで好みを学習",
    description: "あなたとの会話から関心事を自動的に学習し、次第に好みの話題を提案できるようになります。"
  },
  {
    icon: <VoiceIcon className="h-10 w-10 text-indigo-600" />,
    title: "音声合成と表情変化の統合",
    description: "テキストだけでなく、感情に合わせた音声と表情アニメーションで、より自然な対話体験を提供します。"
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-pink-600" />,
    title: "感情に応じた応答生成",
    description: "あなたの感情や会話の文脈を理解し、適切な共感や反応を示すことで深い関係性を構築します。"
  },
  {
    icon: <Shield className="h-10 w-10 text-teal-600" />,
    title: "ローカル重視のプライバシー設計",
    description: "可能な限り処理をデバイス上で行い、プライバシーを最優先に設計されたセキュアなシステムです。"
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features\" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">主な機能</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            RecoMateは最先端のAI技術を駆使して、個人に合わせたチャット体験を提供します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
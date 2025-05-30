import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const roadmapItems = [
  {
    phase: "フェーズ1",
    title: "基本機能の実装",
    description: "チャット機能、バンディットアルゴリズムの基本実装、シンプルなUI",
    status: "completed",
    date: "2025年5月"
  },
  {
    phase: "フェーズ2",
    title: "音声・表情の統合",
    description: "音声合成エンジンの統合、基本的な表情アニメーションの実装",
    status: "in-progress",
    date: "2025年6月"
  },
  {
    phase: "フェーズ3",
    title: "感情分析エンジンの強化",
    description: "より高度な感情分析と応答生成システムの実装",
    status: "planned",
    date: "2025年7月"
  },
  {
    phase: "フェーズ4",
    title: "オフライン機能の拡充",
    description: "ローカル処理の強化、よりプライバシーを重視した設計へ",
    status: "planned",
    date: "2025年8月"
  }
];

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">開発ロードマップ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            RecoMateの開発計画と今後の展望
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform md:-translate-x-0.5"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 transform -translate-y-1/3 md:-translate-x-3">
                    {item.status === 'completed' ? (
                      <CheckCircle size={24} className="text-green-500 bg-white rounded-full" />
                    ) : (
                      <Circle size={24} className={`${item.status === 'in-progress' ? 'text-yellow-500' : 'text-gray-400'} bg-white rounded-full`} />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                      item.status === 'completed' ? 'border-green-500' : 
                      item.status === 'in-progress' ? 'border-yellow-500' : 
                      'border-gray-300'
                    }`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-purple-600">{item.phase}</span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

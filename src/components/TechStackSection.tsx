import React from 'react';

const technologies = [
  { name: "TensorFlow", color: "bg-orange-500" },
  { name: "PyTorch", color: "bg-red-500" },
  { name: "React", color: "bg-blue-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "WebRTC", color: "bg-yellow-500" },
  { name: "WebGL", color: "bg-purple-500" }
];

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">技術スタック</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            RecoMateは最先端の技術を組み合わせて構築されています
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className={`${tech.color} text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center aspect-square`}
            >
              <span className="font-semibold text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-center">システムアーキテクチャ</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="font-medium mb-2 text-purple-600">フロントエンド</h4>
              <p className="text-gray-600 text-sm">React、WebGL、WebRTCを使用した高性能なユーザーインターフェース</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="font-medium mb-2 text-indigo-600">バックエンド</h4>
              <p className="text-gray-600 text-sm">Node.js、Pythonを使用した効率的なAPIとAI推論エンジン</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
              <h4 className="font-medium mb-2 text-teal-600">AI技術</h4>
              <p className="text-gray-600 text-sm">TensorFlow、PyTorchを使用した機械学習モデルとNLP処理</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
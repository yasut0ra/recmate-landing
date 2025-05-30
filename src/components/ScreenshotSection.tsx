import React from 'react';

const ScreenshotSection: React.FC = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">アプリケーションの外観</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            直感的で使いやすいインターフェースで、AIとの新しい対話体験を
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/3 aspect-[9/16] bg-white rounded-3xl shadow-lg overflow-hidden border-8 border-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-600 font-medium mb-2">モバイルビュー</p>
                <p className="text-sm text-gray-500">スクリーンショットがここに表示されます</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 aspect-video bg-white rounded-xl shadow-lg overflow-hidden border-8 border-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-600 font-medium mb-2">デスクトップビュー</p>
                <p className="text-sm text-gray-500">スクリーンショットがここに表示されます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
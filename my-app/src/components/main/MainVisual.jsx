const MainVisual = () => {
    return (
        <div className="container mx-auto p-8">
        {/* サービスについてセクション */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">サービスについて</h2>
          <p className="mb-4 text-lg">
            私たちのサービスは、お客様のビジネスを成功させるために設計されています。高品質なソリューションを提供し、信頼できるパートナーとしてお客様と共に成長していきます。
          </p>
          <p className="mb-4 text-lg">
            当社のサービスは、Web開発、モバイルアプリケーション開発、クラウドソリューションなど、多岐にわたります。お客様のニーズに合わせたカスタマイズが可能です。
          </p>
        </section>
      </div>
    );
};

export default MainVisual;
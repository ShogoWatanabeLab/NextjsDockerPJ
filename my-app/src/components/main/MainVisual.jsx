import { SectionTitle, SectionParagraph } from "../index";

const MainVisual = () => {
  return (
    <>
      {/* メインビジュアル */}
      <section className="mb-16 bg-gray-100 p-8">
        <SectionTitle text={"Shogo Watanabe / MIRAIJIN"}/>
        <SectionParagraph text={"Web エンジニア"} />
        <SectionParagraph
          text={
            "ノーコードWEB制作ツール「STUDIO」のモーション機能で作るアニメーションの作り方。無料プランでも簡単に作れるアイディア集です。"
          }
        />
      </section>
    </>
  );
};

export default MainVisual;

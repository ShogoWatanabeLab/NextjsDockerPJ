import Image from "next/image";

import { SectionTitle, SectionParagraph } from "../index";

const AboutMe = () => {
  return (
    <>
      {/* About Me */}
      <section className="flex mb-16 bg-gray-100 p-8">
        <div>
          <SectionTitle text={"About Me"} style={""} />
          <Image
            src="/images/profile.png"
            alt="プロフィール"
            width={500}
            height={500}
          />
          <SectionParagraph text={"渡邉 匠吾"} style={"font-bold"} />
        </div>
        <div>
          <SectionParagraph
            text={
              "ノーコードWEB制作ツール「STUDIO」のモーション機能で作るアニメーションの作り方。無料プランでも簡単に作れるアイディア集です。"
            }
            style={""}
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;

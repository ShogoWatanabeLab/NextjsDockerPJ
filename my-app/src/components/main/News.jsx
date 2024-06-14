import { SectionTitle, NewsRow } from "../index";

const News = () => {
  return (
    <>
      {/* News */}
      <section className="mb-16 bg-gray-100 p-8">
          <SectionTitle text={"News"} style={""} />
          <table className="">
            <tbody>
              <NewsRow date={"2024年1月1日"} category={"新着情報"} content={"ここにテキストが入ります。"}/>
              <NewsRow date={"2024年1月2日"} category={"ブログ"} content={"ここにテキストが入ります。"}/>
              <NewsRow date={"2024年1月3日"} category={"お知らせ"} content={"ここにテキストが入ります。"}/>
            </tbody>
          </table>
      </section>
    </>
  );
};

export default News;

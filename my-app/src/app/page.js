import { MainVisual, AboutMe, News } from "../components/index";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <MainVisual/>
      <AboutMe/>
      <News/>
    </div>
  )
}

export default Home;
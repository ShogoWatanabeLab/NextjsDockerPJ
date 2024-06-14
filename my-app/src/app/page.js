import { MainVisual, AboutMe, News, Project } from "../components/index";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <MainVisual/>
      <AboutMe/>
      <News/>
      <Project/>
    </div>
  )
}

export default Home;
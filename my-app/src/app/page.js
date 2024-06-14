import { MainVisual, AboutMe, News, Project, Blog } from "../components/index";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <MainVisual/>
      <AboutMe/>
      <News/>
      <Project/>
      <Blog/>
    </div>
  )
}

export default Home;
import { MainVisual, AboutMe, News, Project, Blog, Contact } from "../components/index";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <MainVisual/>
      <AboutMe/>
      <News/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home;
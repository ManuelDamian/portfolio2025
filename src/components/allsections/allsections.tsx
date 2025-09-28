import './allsections.scss'
import Work from '../pages/work/work';
import AboutSection from '../pages/about/about';
import Home from '../pages/home/home';
import SkillsSection from '../pages/skills/skills';
import Contact from '../pages/email/correo'
import AnimatedBackground from '../background/background';

function AllSections() {

  return (
    <>
      <AnimatedBackground />
      <div className="app-allsections-container">
        <Home />
        <AboutSection />
        <Work />
        <SkillsSection />
        <Contact />
      </div>
    </>
  )
}

export default AllSections;

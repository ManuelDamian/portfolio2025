import { useTranslation } from "react-i18next";
import { scrollToHome, scrollToAboutme, scrollToWork, scrollToSkills, scrollToContact } from "../scrollhelpers";
import './navLinks.scss'

function NavLinks() {
  const { t: translate } = useTranslation('navbar')

  return (
    <>
      <nav className="nav-links">
        <a href="#home" className="nav-link" onClick={scrollToHome}>{translate('home')}</a>
        <a href="#aboutme" className="nav-link" onClick={scrollToAboutme}>{translate('about')}</a>
        <a href="#work" className="nav-link" onClick={scrollToWork}>{translate('experience')}</a>
        <a href="#skills" className="nav-link" onClick={scrollToSkills}>{translate('skills')}</a>
        <a href="#contact" className="nav-link" onClick={scrollToContact}>{translate('contact')}</a>
      </nav>
    </>
  )
}

export default NavLinks;
import './navbar.scss'
import LanguageDropdown from './languageDropdown/languageDropdown';
import ToggleThemeButton from './toggleThemeButton/toggleThemeButton';
import NavLinks from './navlinks/navLinks';
import HamburgerDropdown from './hamburgeDropdown/hamburguerDropdown';

function Navbar() {
  return (
    <>
      <div className="app-navbar-container">
        <div className='navbarInfo'>
          <div className="mainmenustyle">
            <NavLinks />
          </div>
          <div className="hamburgermenustyle">
            <HamburgerDropdown />
          </div>
          <div className='langAndThemeChangerContainer'>
            <LanguageDropdown />
            <ToggleThemeButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;

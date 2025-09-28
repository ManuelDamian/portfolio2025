import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import './hamburguerDropdown.scss';
import { useTranslation } from 'react-i18next';

function HamburgerDropdown() {
  const { t: translate } = useTranslation('navbar');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div className="ham-dropdown" ref={dropdownRef}>
      <button className="ham-dropdown-toggle" onClick={() => setOpen(!open)}>
        <Menu /> <span style={{ marginLeft: '8px' }}></span>
      </button>

      {open && (
        <nav className="ham-dropdown-menu">
          <a href="#home" className="nav-link" onClick={handleScrollTo('home')}>{translate('home')}</a>
          <a href="#aboutme" className="nav-link" onClick={handleScrollTo('aboutme')}>{translate('about')}</a>
          <a href="#work" className="nav-link" onClick={handleScrollTo('work')}>{translate('experience')}</a>
          <a href="#skills" className="nav-link" onClick={handleScrollTo('skills')}>{translate('skills')}</a>
          <a href="#contact" className="nav-link" onClick={handleScrollTo('contact')}>{translate('contact')}</a>
        </nav>
      )}
    </div>
  );
}

export default HamburgerDropdown;
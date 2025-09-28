import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './languageDropdown.scss';

function LanguageDropdown() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const { i18n } = useTranslation();

  const switchLanguage = (lang: 'EN' | 'ES') => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const getLabel = () => {
    return language === 'EN' ? 'EN 🇺🇸' : 'ES 🇲🇽';
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">
        <Globe /> <span style={{ marginLeft: '8px' }}>{getLabel()}</span>
      </button>
      <ul className="dropdown-menu">
        <li onClick={() => switchLanguage('ES')}>ES 🇲🇽</li>
        <li onClick={() => switchLanguage('EN')}>EN 🇺🇸</li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;
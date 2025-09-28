import './toggleThemeButton.scss';
import { useEffect, useState } from 'react';
import { Moon, Sun, } from 'lucide-react';

function ToggleThemeButton() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <button className='themebtn' onClick={toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </>
  )
}

export default ToggleThemeButton
import React from 'react';
import { useDarkMode } from '@/src/context/DarkModeContext';
import SunIcon from '@/src/svg/sun-icon';
import MoonIcon from '@/src/svg/moon-icon';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      className="dark-mode-toggle" 
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="dark-mode-toggle__icon">
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
};

export default DarkModeToggle;

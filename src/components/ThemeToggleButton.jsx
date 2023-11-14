/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function ThemeToggleButton() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleChangueTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleChangueTheme}
      className={`relative rounded-full w-16 h-8 flex items-center overflow-hidden bg-gray-300 dark:bg-gray-700 text-white dark:text-gray-800 ${theme === 'dark' ? 'dark' : ''}`}
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full transition-transform duration-1000 transform translate-x-0 dark:translate-x-1/2 bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-gray-800 dark:to-gray-600"
        style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0%)' }}
      ></div>
      {theme === 'light' ? (
        <span className="mx-2" role="img" aria-label="Sol">
          🌞
        </span>
      ) : (
        <span className="mx-2" role="img" aria-label="Luna">
          🌙
        </span>
      )}
    </button>
  );
}

export default ThemeToggleButton;

import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        style={{
          cursor: 'pointer',
          padding: '5px 10px',
          borderRadius: '5px',
          backgroundColor: '#f3a847',
          color: 'black',
          border: 'none',
          outline: 'none',
          transition: 'all 300ms',
        }}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default DarkMode;

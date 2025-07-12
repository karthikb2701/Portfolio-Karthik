// hooks/useDarkMode.js
import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.theme || 'light';
    root.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const root = window.document.documentElement;
    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
}

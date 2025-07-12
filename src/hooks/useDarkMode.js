// hooks/useDarkMode.js
import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    root.classList.toggle('dark', activeTheme === 'dark');
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
}

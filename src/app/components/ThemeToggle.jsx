// components/ThemeToggle.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import useDarkMode from '@/hooks/useDarkMode';

export default function ThemeToggle() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 transition hover:scale-105"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
}

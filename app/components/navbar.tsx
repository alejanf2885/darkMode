import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Solo acceder a localStorage cuando el componente se haya montado en el navegador
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // Solo usar localStorage en el navegador
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white container mx-auto transition-colors transition-200"> 
      <h1 className="text-3xl font-bold border-b-4 rounded border-blue-600 dark:border-blue-400 pb-2">User Person</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-blue-600 dark:bg-blue-400 cursor-pointer px-5"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Moon color="black" /> : <Sun color='white'/>}
      </button>
    </nav>
  );
}

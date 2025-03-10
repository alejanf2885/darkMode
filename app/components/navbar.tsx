import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") as "light" | "dark" | "system") ||
        "system"
      );
    }
    return "system";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const appliedTheme =
        theme === "system" ? (systemDark ? "dark" : "light") : theme;

      if (appliedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as "light" | "dark" | "system");
  };

  return (
    <nav className="flex justify-between p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white container mx-auto transition-colors duration-200">
      <h1 className="text-3xl font-bold border-b-4 rounded border-blue-600 dark:border-blue-400 pb-2">
        User Person
      </h1>
      <div className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 p-3 rounded-lg transition-colors">
        {theme === "light" ? (
          <Sun className="text-white" />
        ) : theme === "dark" ? (
          <Moon className="text-black dark:text-white" />
        ) : (
          <Monitor className="text-white" />
        )}
        <select
          value={theme}
          onChange={handleChange}
          className="bg-transparent text-white dark:text-black cursor-pointer outline-none"
          aria-label="Select Theme"
        >
          <option value="light" className="text-black">
            Light
          </option>
          <option value="dark" className="text-black">
            Dark
          </option>
          <option value="system" className="text-black">
            System
          </option>
        </select>
      </div>
    </nav>
  );
}

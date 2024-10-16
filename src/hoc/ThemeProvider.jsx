import { createContext, useEffect, useState } from "react";
import { ThemeProvider as BootstrapThemeProvider } from "react-bootstrap";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BootstrapThemeProvider theme={theme}>{children}</BootstrapThemeProvider>
    </ThemeContext.Provider>
  );
}

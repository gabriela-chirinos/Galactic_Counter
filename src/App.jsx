import { useState, useEffect } from "react";
import "./App.css";
import ThemeToggle from "./components/Toggle";
import HeaderElement from "./components/Header";
import LogoElement from "./components/Logo";
import TextAreaElement from "./components/Textarea";






function App() {
  // Load theme from localStorage or default to 'jedi'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "jedi");

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Sets theme in <html>
    localStorage.setItem("theme", theme); // Saves theme for future visits
  }, [theme]);

  return (
    <>
      {/* ✅ Pass theme state to ThemeToggle so it works */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <HeaderElement theme={theme} setTheme={setTheme} />
      <LogoElement />
      <TextAreaElement />
      
    </>
  );
}

export default App;

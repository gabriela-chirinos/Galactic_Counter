import { useState, useEffect } from "react";
import "./App.css";
import HeaderElement from "./components/Header";
import LogoElement from "./components/Logo";
import StatElement from "./components/StatTiles"
import TextAreaElement from "./components/Textarea";
import LetterChart from "./components/LetterDensity";





function App() {
  // Load theme from localStorage or default to 'jedi'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "jedi");
  const [text, setText] = useState("");

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Sets theme in <html>
    localStorage.setItem("theme", theme); // Saves theme for future visits
  }, [theme]);

  return (
    <>
      {/* ✅ Pass theme state to ThemeToggle so it works */}
      
      <HeaderElement theme={theme} setTheme={setTheme} />
      <LogoElement />
      <TextAreaElement text={text} setText={setText} />
      <StatElement text={text}  />
      <LetterChart text={text}  />
     
      
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";

export default function ThemeToggle({ theme, setTheme }) {
    return (
      <button
        onClick={() => setTheme(theme === "jedi" ? "sith" : "jedi")}
        className="px-4 py-2 rounded-md text-space-silver bg-olive-green hover:bg-moss-green transition-all"
      >
        {theme === "jedi" ? "🌕 Light Side" : "🌑 Dark Side"}
      </button>
    );
  }
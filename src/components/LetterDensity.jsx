import { useState, useEffect } from "react";
import useDebounce from "./UseDebounce";
import { useMemo } from "react";



export default function LetterDensity({ text }) {
  const letterCounts = text
  .toLowerCase()
  .split("")
  .filter((char) => /[a-z]/.test(char)) // Exclude numbers/symbols
  .reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

// 🔢 Convert to sorted array for graph
const sortedLetters = Object.entries(letterCounts).sort(
  (a, b) => b[1] - a[1]
);
   
  
    return (
      <div className="w-full max-w-lg mx-auto p-4 ">
        <h2 className="text-3xl font-bold  mt-4 mb-7">Letter Density</h2>
  
        <div className="grid grid-cols-3 gap-9 ">
          {Object.entries(letterCounts).map(([letter, count]) => (
            <div
              key={letter}
              className="flex flex-col items-center p-2 rounded-xl bg-[#aed5cf]"
            >
              <span className="text-lg font-bold">{letter.toUpperCase()}</span>
              <span className="text-sm">{count}</span>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
 
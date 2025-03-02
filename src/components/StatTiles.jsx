import React from "react";

export default function StatsTiles({ text }) {
  // ✅ Calculate Counts
  const charCount = text.length; // Total character count
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0; // Count words (handles empty case)
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length; // Count sentences

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 place-items-center">
      
      {/* 🔠 Character Count Tile */}
      <div className="w-4/5 pb-3/5 p-4 rounded-lg bg-[#d9e4e4] text-black shadow-lg md:w-full font-bold">
        <h2 className="text-left lg:text-center text-6xl font-bold font-title">{charCount}</h2>
        <p className="mt-4 text-left text-lg lg:text-center lg:text-2xl">Total Characters</p>
      </div>

      {/* 🔡 Word Count Tile */}
      <div className="w-4/5 pb-3/5 p-4 rounded-lg bg-[#d9e4e4] text-black shadow-lg md:w-full font-bold">
        <h2 className="text-left lg:text-center text-6xl font-bold font-title ">{wordCount}</h2>
        <p className="mt-4 text-left text-lg lg:text-center lg:text-2xl">Word Count</p>
      </div>

      {/* 📖 Sentence Count Tile */}
      <div className="w-4/5 pb-3/5 p-4 rounded-lg bg-[#d9e4e4] text-black shadow-lg md:w-full font-bold">
        <h2 className="text-left lg:text-center text-6xl font-bold font-title ">{sentenceCount}</h2>
        <p className="mt-4  text-lg text-left lg:text-center lg:text-2xl">Sentence Count</p>
      </div>

    </div>
  );
}

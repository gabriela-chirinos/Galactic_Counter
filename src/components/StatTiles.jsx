import React from "react";

export default function StatsTiles({ charCount, wordCount, sentenceCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      
      {/* 🔠 Character Count Tile */}
      <div className="p-4 rounded-lg bg-blue-400 text-black shadow-lg">
        <h2 className="text-4xl font-bold">{charCount}</h2>
        <p className="text-lg">Total Characters</p>
      </div>

      {/* 🔡 Word Count Tile */}
      <div className="p-4 rounded-lg bg-pink-300 text-black shadow-lg">
        <h2 className="text-4xl font-bold">{wordCount}</h2>
        <p className="text-lg">Word Count</p>
      </div>

      {/* 📖 Sentence Count Tile */}
      <div className="p-4 rounded-lg bg-[#FF8664] text-black shadow-lg">
        <h2 className="text-4xl font-bold">{sentenceCount}</h2>
        <p className="text-lg">Sentence Count</p>
      </div>

    </div>
  );
}

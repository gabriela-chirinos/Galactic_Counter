import { useState } from "react";
import StatElement from "./StatTiles";

export default function TextArea() {
  const [text, setText] = useState("");
  const [includeSpaces, setIncludeSpaces] = useState(false); // Default: Exclude spaces
  const [charLimit, setCharLimit] = useState(200); // Default character limit

  

  // Handle text input
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Character count logic
  const charCount = includeSpaces ? text.length : text.replace(/\s/g, "").length;

  // Word & sentence count
  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;

  // Estimate reading time (200 words per minute)
  const readingTime = wordCount / 200;
  const formattedReadingTime = readingTime < 1 ? "Less than a minute" : `${Math.ceil(readingTime)} min read`;

  return (
    <div className="flex flex-col gap-4 p-4 text-space-silver">
      
      {/* Character Limit Input */}
      <div className="flex items-center gap-2">
        <label className="text-sm">Set Character Limit:</label>
        <input
          type="number"
          min="50"
          max="1000"
          value={charLimit}
          onChange={(e) => setCharLimit(Number(e.target.value))}
          className="w-20 bg-galactic-gray border border-space-silver rounded px-2 py-1 text-center"
        />
     
      </div>

      {/* Textarea */}
      <textarea
        className={`w-full h-40 p-4 bg-galactic-gray border border-space-silver rounded-lg focus:outline-none focus:ring-2 ring-offset-2 focus:ring-alien-green 
        ${charCount > charLimit ? "border-red-500" : ""}`}
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
      />

<StatElement
        charCount={charCount} 
        wordCount={wordCount} 
        sentenceCount={sentenceCount} 
      />


    </div>
    
  );
}

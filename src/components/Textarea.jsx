import { useState } from "react";

export default function TextAreaElement({ text, setText }) {
  // 🔹 State to track whether spaces should be excluded
  const [excludeSpaces, setExcludeSpaces] = useState(false);

  // 🔹 State for character limit
  const [charLimit, setCharLimit] = useState(200);

  // ✅ Corrected: Handle text input changes
  const handleTextChange = (e) => {
    let newText = e.target.value;

    // ✅ If 'excludeSpaces' is true, remove spaces from text
    if (excludeSpaces) {
      newText = newText.replace(/\s/g, "");
    }

    // ✅ Prevent exceeding character limit
    if (newText.length <= charLimit) {
      setText(newText);
    }
  };

  return (
    <div className="w-full  max-w-md  md:max-w-2xl  lg:max-w-4xl mx-auto p-4">
      {/* 🔹 Text Input Area */}
      <textarea
        className="w-full h-42  p-3 bg-teal-100 text-space-silver rounded-lg focus:outline-4"
        placeholder="Start typing..."
        value={text}
        onChange={handleTextChange} // ✅ Now properly defined
      />

      {/* 🔹 Controls for Excluding Spaces & Setting Character Limit */}
      <div className="flex justify-between items-center mt-2 text-space-silver">
        {/* ✅ Toggle Exclude Spaces */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
            className="cursor-pointer"
          />
          <span>Exclude Spaces</span>
        </label>

        {/* ✅ Set Character Limit */}
        <label className="flex items-center space-x-2">
          <span>Character Limit:</span>
          <input
            type="number"
            value={charLimit}
            onChange={(e) => setCharLimit(Number(e.target.value))}
            className="w-16 bg-gray-200 text-space-silver p-1 rounded-md"
          />
        </label>
      </div>

      {/* 🔥 Warning if character limit is exceeded */}
      {text.length > charLimit && (
        <p className="text-sm text-red-400 mt-2">Character limit exceeded!</p>
      )}
    </div>
  );
}

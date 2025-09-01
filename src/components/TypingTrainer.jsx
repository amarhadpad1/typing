import React, { useState } from "react";

const TypingTrainer = () => {
  const levels = [
    ["a", "s", "d", "f"],
    ["as", "df"],
    ["asdf", "sdfg"],
    ["earlier rare alien line rear line lie"],
    ["more text here for level 5"]
  ];

  const [level, setLevel] = useState(0);
  const [line, setLine] = useState(0);
  const [input, setInput] = useState("");

  const targetText = levels[level][line];

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // ✅ If user finished correctly
    if (value === targetText) {
      setTimeout(() => {
        // Move to next line
        if (line < levels[level].length - 1) {
          setLine(line + 1);
        } else {
          // Move to next level
          setLevel(level + 1);
          setLine(0);
        }
        setInput(""); // clear textarea
      }, 300);
    }
  };

  return (
    <div className="bg-white text-black text-lg p-4 rounded-xl mb-3 shadow">
      <h2 className="text-xl font-bold mb-4">Level {level + 1}</h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-left whitespace-pre-wrap">
        {targetText}
      </pre>
      <textarea
        className="w-full p-3 border rounded"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default TypingTrainer;

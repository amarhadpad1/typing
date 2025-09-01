import React, { useState, useEffect } from "react";
import { generateText } from "../utils/textGenerator";

export default function TypingBox() {
  const [level, setLevel] = useState(1);
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    setText(generateText(level));
  }, [level]);

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    // calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) correctChars++;
    }
    setAccuracy(Math.floor((correctChars / input.length) * 100) || 100);

    // check if finished
    if (input.length === text.length) {
      if (accuracy >= 90) {
        alert(`✅ Great! Moving to level ${level + 1}`);
        setLevel(level + 1);
      } else if (accuracy < 70) {
        alert("❌ Accuracy too low, try again!");
      } else {
        alert("⚡ Almost there! Try again at same level.");
      }

      // reset
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0f1c] text-white">
      <h1 className="text-4xl font-extrabold mb-6">Typist</h1>

      {/* Level */}
      <h2 className="text-2xl font-bold mb-4">Level {level}</h2>

      {/* Target Text */}
      <div className="bg-white text-black text-xl p-4 rounded-xl mb-4 shadow w-[500px] text-center">
        {text}
      </div>

      {/* Typing Box */}
      <textarea
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        className="w-[500px] h-24 p-4 text-lg border rounded-xl focus:outline-none resize-none text-black"
        value={userInput}
        onChange={handleChange}
      />

      {/* Stats */}
      <p className="mt-4 text-lg">Accuracy: {accuracy}%</p>
    </div>
  );
}

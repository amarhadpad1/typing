import React, { useState } from "react";

export default function App() {
  // Stages with easy → harder words
  const stages = [
    // Stage 1 – Home Row
    [
      "sad dad had lad mad",
      "gas gag sag tag rag",
      "all hall fall ball call",
      "jag lag bag rag nag",
      "fad lad had bad pad",
    ],
    // Stage 2 – Top Row
    [
      "wet yet get bet set",
      "ten pen men hen den",
      "pet let met net vet",
      "tip sip rip lip dip",
      "quit wit lit sit fit",
    ],
    // Stage 3 – Bottom Row
    [
      "man can ran ban fan",
      "van pan tan nan jan",
      "mix six fix box fox",
      "zoo too moo boo coo",
      "jazz buzz fuzz fizz",
    ],
    // Stage 4 – Short Sentences
    [
      "a man ran",
      "the cat sat",
      "dad had a hat",
      "pet the dog",
      "the fox ran",
    ],
    // Stage 5 – Full Sentences
    [
      "earlier rare alien line rear line lie",
      "light night right might sight tight bright",
      "cat bat rat sat mat fat hat pat",
      "the quick brown fox jumps over the lazy dog",
    ],
  ];

  const [stage, setStage] = useState(0);
  const [line, setLine] = useState(0);
  const [text, setText] = useState(stages[0][0]);
  const [userInput, setUserInput] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // New state for start button
  const [started, setStarted] = useState(false);

  // Current key expected
  const currentKey = text[currentCharIndex] || "✔";

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    // if correct char typed
    if (value[currentCharIndex] === text[currentCharIndex]) {
      setCurrentCharIndex(currentCharIndex + 1);

      // line completed
      if (currentCharIndex + 1 === text.length) {
        nextLine();
      }
    }
  };

  const nextLine = () => {
    setUserInput("");
    setCurrentCharIndex(0);

    if (line + 1 < stages[stage].length) {
      setLine(line + 1);
      setText(stages[stage][line + 1]);
    } else if (stage + 1 < stages.length) {
      setStage(stage + 1);
      setLine(0);
      setText(stages[stage + 1][0]);
    } else {
      setText("🎉 All stages completed!");
    }
  };

  // Helper to render each row of keys
  const renderRow = (keys) => (
    <div className="flex justify-center gap-2 mt-2">
      {keys.split("").map((key) => (
        <div
          key={key}
          className={`px-3 py-2 rounded-lg text-center uppercase ${
            currentKey.toLowerCase() === key
              ? "bg-yellow-500 text-black"
              : "bg-gray-700"
          }`}
        >
          {key === " " ? "␣" : key}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!started ? (
        // Show Start Button first
        <button
          onClick={() => setStarted(true)}
          className="bg-green-500 hover:bg-green-600 text-black font-bold text-2xl px-10 py-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
        >
          🚀 Start Typing 
        </button>
      ) : (
        <>
          {/* Stats */}
          <div className="mb-6 text-center">
            <p>
              Stage: {stage + 1} | Line: {line + 1}
            </p>
            <p>Current key: {currentKey}</p>
          </div>

          {/* Typing text */}
          <div className="bg-gray-800 p-6 rounded-lg text-xl font-mono mb-6">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={
                  index === currentCharIndex
                    ? "bg-yellow-500 text-black px-1"
                    : index < currentCharIndex
                    ? "text-green-400"
                    : "text-gray-400"
                }
              >
                {char}
              </span>
            ))}
          </div>

          {/* Input box */}
          <input type="text"
            value={userInput}
            onChange={handleChange}
            className="w-full max-w-xl h-12 p-4 text-lg text-black rounded-lg"
            placeholder="Type Here..."
         />


          {/* Virtual Keyboard */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg inline-block">
            {renderRow("qwertyuiop")}
            {renderRow("asdfghjkl;")}
            {renderRow("zxcvbnm,./")}
            {renderRow(" ")}
          </div>
        </>
      )}
    </div>
  );
}

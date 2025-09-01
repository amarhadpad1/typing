import React from "react";

export default function Stats({ wpm, accuracy }) {
  return (
    <div className="mt-6 text-lg">
      <p>
        WPM: <span className="font-bold">{wpm}</span>
      </p>
      <p>
        Accuracy: <span className="font-bold">{accuracy}%</span>
      </p>
    </div>
  );
}

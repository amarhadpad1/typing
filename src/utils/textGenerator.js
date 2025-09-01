// Simple word bank for progression
const easyWords = ["cat", "dog", "sun", "pen", "cup", "car", "map", "red", "box"];
const mediumWords = ["orange", "bottle", "window", "garden", "school", "mother"];
const hardWords = ["elephant", "computer", "keyboard", "language", "function", "javascript"];
const calculateAccuracy = (typed, target) => {
  if (typed.length === 0) return 100; // show 100% before typing
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correct++;
  }
  return Math.round((correct / typed.length) * 100);
};

export function generateText(level) {
  let wordPool;

  if (level === 1) wordPool = easyWords;
  else if (level === 2) wordPool = mediumWords;
  else wordPool = hardWords;

  const numLines = Math.min(level, 3); // max 3 lines
  const lines = [];

  for (let i = 0; i < numLines; i++) {
    const words = [];
    for (let j = 0; j < 6; j++) {
      const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
      words.push(randomWord);
    }
    lines.push(words.join(" "));
  }

  return lines.join("\n"); // multiple lines separated
}

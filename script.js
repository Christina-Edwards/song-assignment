console.log("script.js loaded");

// 1. Full printed version
function printedSong() {
  console.log("Row, row, row your boat,\n");
  console.log("Gently down the stream.\n");
  console.log("Merrily, merrily, merrily, merrily,\n");
  console.log("Life is but a dream.\n");
  console.log("Row, row, row your boat,\n");
  console.log("Gently down the stream.\n");
  console.log("Merrily, merrily, merrily, merrily,\n");
  console.log("Life is but a dream.\n");
}

// 2. Simplified with a refrain function
function refrain() {
  console.log("Row, row, row your boat,");
  console.log("Gently down the stream.");
}

function song() {
  refrain();
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
  refrain();
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
}

// 3. Refactored with return
function refactoredRefrain() {
  return "Row, row, row your boat,\nGently down the stream.";
}

function refactoredSong() {
  console.log(refactoredRefrain());
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
  console.log(refactoredRefrain());
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
}

// Run all versions for proof-of-life
console.log("\n--- Printed Song ---");
printedSong();

console.log("\n--- Simplified Song ---");
song();

console.log("\n--- Refactored Song ---");
refactoredSong();

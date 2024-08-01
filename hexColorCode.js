function generateRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(generateRandomHexColor()); // Output: A random hex color code, e.g., "#3e2f1b"

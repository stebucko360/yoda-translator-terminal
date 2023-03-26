export function yodaSpeak(text) {
  // Split the input text into an array of words
  const words = text.split(" ");

  // Reverse the order of the words in the array
  const reversedWords = words.reverse();

  // Join the reversed words into a new string, separated by spaces
  const reversedText = reversedWords.join(" ");

  // Capitalize the first letter of the new string
  const yodaText = reversedText.charAt(0).toUpperCase() + reversedText.slice(1);

  // Add Yoda's catchphrase at the end
  return yodaText + ", mmm?";
}


function* wordSplitter(sentence) {
  const words = sentence.split(' ');
  for (const word of words) {
    yield word;
  }
}
const sentence = "All I know is something like a bird within her sang";
const wordGenerator = wordSplitter(sentence);
for (const word of wordGenerator) {
  console.log(word);
}

  
  
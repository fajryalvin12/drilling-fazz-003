const str = "Hello World";
// const words = str.split(" ");
// const iterate = words.forEach((item) => console.log(item.length - 1).length);

function iterateWords(item) {
  const last = item.split(" ");
  return last[last.length - 1].length;
}

console.log(iterateWords(str));

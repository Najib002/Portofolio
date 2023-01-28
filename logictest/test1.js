let words = "beever";
let printWords = "";
for (let i = 1; i <= words.length; i++) {
  printWords += words.substr(0, i) + "\n";
}
console.log(printWords);

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

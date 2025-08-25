const scores = new Set([
  ["A", 100],
  ["B", 14],
  ["C", 9],
  ["D", 28],
  ["E", 145],
  ["F", 12],
  ["G", 3],
  ["H", 10],
  ["I", 200],
  ["J", 100],
  ["K", 114],
  ["L", 100],
  ["M", 25],
  ["N", 450],
  ["O", 80],
  ["P", 2],
  ["Q", 12],
  ["R", 400],
  ["S", 113],
  ["T", 405],
  ["U", 11],
  ["V", 10],
  ["W", 10],
  ["X", 3],
  ["Y", 210],
  ["Z", 23],
]);

function nameScore(name) {
  const scoreMap = new Map(scores);
  let total = 0;

  for (let ch of name.toUpperCase()) {
    total += scoreMap.get(ch) || 0;
  }

  if (total <= 60) return "NOT TOO GOOD";
  if (total <= 300) return "PRETTY GOOD";
  if (total <= 599) return "VERY GOOD";
  return "THE BEST";
}

console.log(nameScore("MUBASHIR"));
console.log(nameScore("YOU"));
console.log(nameScore("MATT"));
console.log(nameScore("PUBG"));

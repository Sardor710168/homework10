function determineWinnerOfFight(rounds) {
  let meWins = 0;
  let spouseWins = 0;

  for (let [, score] of rounds) {
    if (score.me > score.spouse) meWins++;
    else if (score.me < score.spouse) spouseWins++;
  }

  if (meWins > spouseWins) return "MEN!";
  if (meWins < spouseWins) return "TURMUSH O'RTOG'IM!";
  return "HECH KIM!";
}

let map1 = new Map([
  ["round1", { me: 10, spouse: 5 }],
  ["round2", { me: 5, spouse: 20 }],
  ["round3", { me: 10, spouse: 10 }],
]);

let map2 = new Map([
  ["round1", { me: 40, spouse: 5 }],
  ["round2", { me: 9, spouse: 10 }],
  ["round3", { me: 9, spouse: 10 }],
]);

console.log(determineWinnerOfFight(map1));
console.log(determineWinnerOfFight(map2));

function hisobla() {
  const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];

  let withAvg = students.map(student => {
    let avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return { ...student, avg };
  });

  withAvg.sort((a, b) => b.avg - a.avg);

  let topTwo = withAvg.slice(0, 2);

  for (let student of topTwo) {
    let maxScore = Math.max(...student.scores);
    console.log(`${student.name} → O‘rtacha: ${student.avg}, Eng katta ball: ${maxScore}`);
  }
}

hisobla();

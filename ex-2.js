//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  // let result = 0;
  let passScores = [];
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      passScores.push(array[i]);
    }
    // result += operation(array[i]);
  }

  // if (result >= 5) {
  if (passScores.length >= 5) {
    return 'ผ่านเกณฑ์ ✅';
  } else {
    return 'ไม่ผ่านเกณฑ์ ❌';
  }
}

function checkScore(score) {
  if (score > 70) {
    return score;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);

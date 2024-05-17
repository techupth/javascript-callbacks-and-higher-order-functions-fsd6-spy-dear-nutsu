//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
    if (count >= 5) {
      return "ผ่านเกณฑ์ ✅"
    } else {
      return "ไม่ผ่านเกณฑ์ ❌"
    }
}

function checkPassOver70(score) {
  if (score > 70) {
    return 1
  } else {
    return 0
  }
}
// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkPassOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkPassOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkPassOver70);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);
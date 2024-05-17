//Exercise #2: At Least Five Function

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  // Start coding here
  let checkPass = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) checkPass++;
  }
  // console.log(array) เช็คว่าคะแนนนักเรียนเเต่ละคนเข้ามาทำงานครบทุกห้องไหม
  return operation(checkPass);
}
function countStudentPass(checkPass) {
  if (checkPass >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, countStudentPass);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, countStudentPass);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, countStudentPass);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);

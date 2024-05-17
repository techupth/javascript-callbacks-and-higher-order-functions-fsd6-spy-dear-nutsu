const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) operation(array[i]);
}
function addSalary(oldSalary) {
  const newSalary = oldSalary + 5000;
  newEmployeeSalaries.push(newSalary);
}

// Using `forEach` function here
forEach(employeeSalaries, addSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
// console.log(employeeSalaries);

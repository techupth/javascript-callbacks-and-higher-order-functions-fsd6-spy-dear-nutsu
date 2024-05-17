// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return function (x) {
    for (let i = 0; i < array.length; i++) {
      newEmployeeSalaries.push(operation(array[i], x));
    }
    return newEmployeeSalaries;
  };
}

function plusSalaries(salary, x) {
  let newSalary = salary + x;
  return newSalary;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

const calculateSalary = forEach(employeeSalaries, plusSalaries);

// forEach(employeeSalaries, plusSalaries);

console.log(calculateSalary(5000)); // [25005, 45000, 37000, 19500, 349000]

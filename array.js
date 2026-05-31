// let a=[1,2,4,5];
// const r = a.map(function(b) {
//     return b * 2;
// });
// console.log(r);
const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
  { id: 3, name: "David" }
];

const employeeNames = employees.map((employee) => {
  return employee.name;
});

export default employeeNames;
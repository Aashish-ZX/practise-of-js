const person ={
    name:"Aashish",
    age:19,
    home:"BKT",
    nationality:"Nepali"
};
console.log(Object.keys(person));
console.log(Object.values(person));
// export default person;
console.log(Object.entries(person));

const ob1={name :"Aashish",};
 const ob2={ sirname:"Bajracharya"};
const result=Object.assign({}, ob1,ob2); 
console.log(result);

let user={name :"aassdsdish"};
Object.freeze(user);
// user.name="aavash";this is crashing the nodemon
console.log(user.name);

const user={name :"ashiskh"};
Object.seal(user);
user.name="Aashish";
// user.age=20; //crashing the nodemon
console.log(user);

console.log(Object.hasOwn(user,"name"));


const person={
    greetd(){
        console.log("whats up bro")
    }
};
const abc=Object.create(person);
abc.greetd();

const data=[
["name","Aashish"],
   ["age",19],
    ["home","BKT" ] 
];
const obj=Object.fromEntries(data);
console.log(obj);
console.log(Object.is(obj.name, "Aashish"));
let a=[1,2,4,5];
const r = a.map(function(b) {
    return b * 2;
});
console.log(r);
const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
  { id: 3, name: "David" }
];

const employeeNames = employees.map((employee) => {
  return employee.name;
});

// export default employeeNames;
let a = Infinity;
let i;
let jo=null;
let b="Aashish";
const c=3.14;
let animal=["cat","monkey ","bat",'rabbit']
let longintiger=123456789012345678901234567890n;
function school(name){
    return "school name is :"+ name;
}

let scname=school("sunshine");
console.log(scname);
console.log(a);// printing infinity and NaN as a number 
console.log(i);//undefined
console.log(b);//Aashish
console.log(jo);//null
console.log(longintiger);//123456789012345678901234567890n
console.log (c+b);// 3.14Aashish
console.log(animal);//[ 'cat', 'monkey ', 'bat', 'rabbit' ]
 console.log(animal[3],animal[2]); // rabbit bat
  
 let house={
    1:"red",
    2:"green",
    shape:"rectangle",
    size:200
 };
 console.log(house.shape); // rectangle


 let user = {
  name: "John",        // string
  age: 25,             // number
  isAdmin: true,       // boolean
  hobbies: ["code", "music"], // array
  greet: function () { // function
    console.log("Welcome!");
  }
};

console.log(user.name);
user.greet();


let obj1 = { name: "Ram" };
let obj2 = obj1;

obj2.name = "bisghias";

console.log(obj1.name);

console.log(typeof(b));//string
console.log(typeof(i));//undefined
console.log(typeof(jo));//object

console.log(0.2+0.1==0.3);//false 
console.log('5' === 5 );  // false  (different types) 
console.log(0 == false ) ;// true 
console.log(1==true);
console.log(0 === false );// false 
console.log(null == undefined ) // true 
console.log(NaN === NaN );// false
console.log(( -0 && 0n && "" && null && undefined && NaN) == false);//true
console.log((1) ==true);//true
console.log(1 - "2")//12
console.log("5" + 2);//52 
console.log(5 + "2");//52 
 console.log(1 + "2")      // 12  
console.log("5" - 2)      // 3     
console.log(true + 1   )  // 2      
console.log([] + {} )     // object Object 
console.log(Number("") )  // 0 
console.log(Boolean("a"))//true
console.log({} === {}); // false 

//hoiesting in var
var axc;   

console.log(axc);//undefined

axc = 10;

// //let 
// console.log(bxc);//reference error

let bxc = 20;
var x = "sandy";

{
    const b = "dark";
    let a = "aashish";

    function asd() {
        let sms = "can u access me";

        function gsd() {
            console.log(sms);
        }

        gsd(); // calling inner function
    }

    console.log(a);// block scope
    console.log(x);// global scope
    console.log(b);// block scope

    asd(); // calling outer function
}
function sub(a,b){ // function declaration
    return a-b;
}
console.log (sub(3,9)); 
const value = function (x,y){ //function expression
    return x*y;
}
console.log(value(3,4));

const sum=(g,v) => 5+g+v;// Arrow function
console.log(sum(10,20));

function kerson(name) {//constructer function
   this.name = name;
}

const p1 = new kerson("ashis");

console.log(p1.name);

const obj = {
   manner() {
      return "Namaste GURUJI";//method shorthand
   }
};

console.log(obj.manner()); 

(function () {                            //IIFE
   console.log("Run now  fast immediate");
})();


const objc = {
   names: "ashish",
   show: function () {
      console.log(this.names);//regular function support this
   }
};

objc.show();

const obj3 = {
   name: "lali",   //Arrow function does NOT create its own this
   show: () => {
      console.log(this.name);
   }
};

obj3.show();


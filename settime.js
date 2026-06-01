console.log("hello");
setTimeout(function(){
    console.log(4+2);
},3000)

console.log("end");
setTimeout(function(){
    console.log("this is a promise");}
    ,3000);

const aashish=()=>console.log("this should be printed");
const timeoutId = setTimeout(aashish,2000);
// clearTimeout(timeoutId);

function person(){
    console.log("my name is ${name} and age is ${age}");
}
// setTimeout(()=>person("anks",56),3000)
setTimeout((person),2000);

setTimeout(()=>console.log("hello kaise ho brother"),2000)

setInterval(()=>
    console.log("this is a repeated code")
, 5000);

setTimeout(()=>console.log ("setting the time"),3000);
function Test(){
    console.log("this is the name of the aashsh");
}
setInterval(Test,3000);

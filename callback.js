function person(name,home,callback){
    console.log("name is:" +name +" " +"home is " +home);
    callback();
}
function color(){
    console.log("house color is red");
}
person("aashish","BKT",color);
method 1
const calculator=(a,b,operation)=>{
    return operation(a,b);
}

const addition = calculator(1,2,function(n1,n2){
    return n1+n2;
});
console.log(addition);
//method 2
const subtract=(a,b)=>{return a-b;};
const subtraction = calculator(5,3 ,subtract);
console.log(subtraction);

const divission=function div(a,b){
    return a/b;
}
const division=calculator(50,5,divission);
console.log(division);

function modulo(a,b){
    return a%b;
}
const modresult=calculator(13,10,modulo);
console.log(modresult);
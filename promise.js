function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("Aashish", sayBye);


function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add(5, 3, function(result) {
    console.log("Result:", result);
});
}
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Aashish", age: 22 });
        }, 2000);
    });
}

getUser().then((user) => {
    console.log(user);
});

"use strict"

const message = "Hello World";
delete message;

//never do this
// insaneVariable = "This is not good"

let person = 27;

console.log(age++);
console.log(age);

const person = {
    name: "Christina"
};

// I can do this despite it being const
person.name = "John";
person.favoriteFood = "Lasagne";
delete person.favoriteFood
console.log(person);

// I can't do the following
person = "bzzzzz";

const immutablePerson = Object.freeze(person);
immutablePerson.name = "New Name"; // this does nothing
console.log(immutablePerson);

// Never use var (anymore)
var oldSchoolJavascript = -10;

// create a new scope
{
    let someValues= "Some value";
    {
            let someValue = "Other value";
            console.log(someValue);
    }
    console.log(someValue);
}

{
    var someValues = true;
    {
            var someValue = false;
            console.log(someValue);
    }
    console.log(someValue);
}

// write a for-loop

for(let i = 0; i <= 5; i++){
setTimeout(function runsAfterTheLoop(){
    console.log(i)
}, 1000);
    console.log(i);
}
// don't do this
// the result might surprise you!
for(var i = 0; i <= 5; i++){
    setTimeout(function runsAfterTheLoop(){
        console.log(i)
    }, 1000);
        console.log(i);
    }

    





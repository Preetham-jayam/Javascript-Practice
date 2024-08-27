function greetName(greet){
    return greet+" "+this.firstName+" "+this.lastName;
}

const person1={
    firstName:"Preetham",
    lastName:"Jayam"
};

console.log(greetName.call(person1,"Hello"));
console.log(greetName.apply(person1,["Hi"]));

const greetBind=greetName.bind(person1);
console.log(greetBind("Hoola"));
const users=[{
    id:1,
    name:"Rahul",
    email:"rahul@gmail.com",
    isActive:1,
    age:20
},
{
    id:2,
    name:"Preetham",
    email:"preetham@gmail.com",
    isActive:0,
    age:30
}];

//Write code to get array of anmes from given array of users

const names=[];

//For loop
for(let i=0;i<users.length;i++){
    names.push(users[i].name);
}

//forEach
const names2=[];
users.forEach((user)=>{
    names2.push(user.name);
});

//map
const names3=users.map((user)=>user.name);
console.log(names3);


const names4=users.filter((user)=>user.isActive).map((user)=>user.name);
console.log(names4);


for(let user of users){
    console.log(user.name);
}

//write a code to get active users and sort according to age
//Method chaining approach
const names5=users
.sort((user1,user2)=>user1.age<user2.age ? -1:1)
.filter((user)=>user.isActive)
.map((user)=>user.name);

console.log(users);
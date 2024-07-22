const users = [
    {id: 1, name: 'Jack', isActive: true},
    {id: 2, name: 'John', isActive: true},
    {id: 3, name: 'Mike', isActive: false},
];

// const isNameExists=(name,users)=>{
//     let exists=false;
//     for(let user of users){
//         if(user.name===name){
//             exists=true;
//         }
//     }

//     return exists;
// }

const isNameExists=(name,users)=> users.some((user)=>user.name===name);
console.log(isNameExists('Jack', users)); 
//Sort the array of numbers
const arr=[3,5,1];
const result=arr.sort((a,b)=>b-a);
console.log(arr,result);

const books = [
    {name: 'Harry Potter', author: 'Joanne Rowling'},
    {name: 'Warcross', author: 'Marie Lu'},
    {name: 'THe Hunger Games', author: 'Suzanne Collins'}
];

books.sort((book1,book2)=>{
    const name1=book1.author.split(" ")[1];
    const name2=book2.author.split(" ")[1];
    return name1<name2?-1:1;
});
console.log(books);
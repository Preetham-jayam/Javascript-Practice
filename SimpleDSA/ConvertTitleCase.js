const toTitleCase=(str)=> {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


const myString = "hello world! this is a title case example.";
const titleCasedString = toTitleCase(myString);
console.log(titleCasedString); 

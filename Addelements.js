
const append=(arr,el)=>{
    // arr.push(el);  //Modifies the old array and dont create new array
    // return arr;

    return [...arr,el];
}

const numbers=[1,2];
const newNumbers=append(numbers,3);
console.log(newNumbers);
console.log(numbers);

//Concatenate 2 arrays

const mergeArrays=(arr1,ar2)=>{
    //return arr1.concat(...arr2);
    return [...arr1,...ar2];
}
const arr1=[1];
const arr2=[2,3];
const result=mergeArrays(arr1,arr2);

console.log(result);
console.log(arr1,arr2);

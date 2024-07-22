//Remove all duplicates in the array

// const uniqueArr=arr=>{
//     return [...new Set(arr)];
// }

// const uniqueArr=(arr)=>{
//     let result=[];
//     arr.forEach((item)=>{
//         if(!result.includes(item)){
//             result.push(item);
//         }
//     });
//     return result;
// }

const uniqueArr=(arr)=>{
    return arr.reduce((acc,el)=>{
        return acc.includes(el) ? acc : [...acc,el];
    },[]);
}

console.log(uniqueArr([1,1,1,12]));
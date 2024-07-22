const arr=[1,1,1,2,3];
const minValue=Math.min(...arr);

const minArr=arr.filter(el=>el===minValue);

console.log(minArr.length);
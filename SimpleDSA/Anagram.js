const isAnagram=(str1,str2)=>{
    if(str1.length!==str2.length) return false;
    const s1=str1.toLowerCase();
    const s2=str2.toLowerCase();

    if(s1===s2) return false;
    
    const sortedS1=s1.split('').sort().join("");
    const sortedS2=s2.split('').sort().join("");

    return sortedS1===sortedS2;

}

console.log(isAnagram('foo','bar'));
console.log(isAnagram('silent','listen'));
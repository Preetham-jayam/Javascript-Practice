//range(1,50)

const genRange=(start,end)=>{
    return [...Array(end-start+1).keys()].map(el=>el+start);
}

console.log(genRange(1,20));

function *range(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
}
const r=range(1,50);
console.log(r.next().value);
console.log(r.next().value);

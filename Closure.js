//Create a counter function which has increment and getvalue functionality

//closure means we have access to outside variables oustide of function in a given closure
const privateCounter=()=>{
    let count=0;
    return{
        increment:(val=1)=>{
            count+=val;
        },
        getValue:()=>{
            return count;
        }
    }
}

const counter=privateCounter();
console.log(counter.getValue());
counter.increment(2);
console.log(counter.getValue());

const privateSecret=()=>{
    const secret='preetham';
    return ()=>secret;
}

const getSecret=privateSecret();
console.log(getSecret());
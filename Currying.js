//Write a function which helps to achieve multiply(a)(b) and returns their product

const multiply=(num1)=>{
    return (num2)=>{
        return num1*num2;
    }
}

console.log(multiply(1)(8));

//Create a curry function

const curry=function(fn){
    var arity=fn.length;
    console.log("Arity",arity);
    return function f1(...args){
        if(args.length>=arity){
            console.log('enough arguements');
            return fn(...args);
        } else{
            console.log('Need more arguements');
            return function f2(...moreArgs){
                var newArgs=args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
}

const curriedSum=curry((a,b,c)=>a+b+c);
console.log(curriedSum(1,2,3));

const partiallyCurriedSum=curriedSum(1);
console.log(partiallyCurriedSum(2,3));
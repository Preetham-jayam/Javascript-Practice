//Design a shallow comparision function

const typeOf=(input)=>{
    const rawObject=Object.prototype.toString.call(input).toLowerCase();
    const typeOfregex=/\[object (.*)]/g;
    const type=typeOfregex.exec(rawObject)[1];
    return type;
}

const shallowcompare=(source,target)=>{
    if(typeOf(source)!==typeOf(target)){
        return false;
    }

    if(typeOf(source)==='array'){
        if(source.length!==target.length){
            return false;
        }
        return source.every((el,index)=>el===target[index]);
    }

    if(typeOf(source)==='object'){
        if(Object.keys(source).length!==Object.keys(target).length){
            return false;
        }

        return Object.keys(source).every((key)=>source[key]===target[key]);
    }

    if(typeOf(source)==='date'){
        return source.getTime()===target.getTime();
    }

    return source===target;
}

console.log(shallowcompare([1],[2]));
console.log(shallowcompare({a:{b:1}},{a:{b:1}}));
console.log(shallowcompare({a:1},{a:1}));


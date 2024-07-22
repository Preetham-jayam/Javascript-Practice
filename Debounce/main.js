// Create debounce function

const debounce=(func,timeout=300)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout((timer)=>{
            func.apply(this,args);
        },timeout);
    };
};

const saveInput = name => console.log('saveInput', name)
const processChange = debounce(saveInput, 2000)
processChange('foo')
processChange('foo')
processChange('foo')
processChange('foo')
processChange('foo')
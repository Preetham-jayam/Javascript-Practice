const fetchData=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                res({data:"Here is your data"});
            } else{
                rej("Failed to fetch user data");
            }
        },2000);
    })
};

const helper=async ()=>{
    try{
        const resp=await fetchData();
        console.log(resp);
    }catch(err){
        console.log(err);
    }
};

helper();
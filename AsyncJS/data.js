//write an example of fetching data with XMLHttpRequest

// const xhr=new XMLHttpRequest();

// xhr.open('GET',"https://api.github.com/users/Preetham-jayam/repos");

// xhr.send();

// xhr.onload=function(){
//     if(xhr.status!=200){
//         console.log("Error"+xhr.status+xhr.statusText);
//     } else{
//         console.log("Success"+xhr.response);
//     }
// }

// xhr.onerror=function(){
//     console.log("xhr req failed");
// }

//using fetch (Promises concept)

fetch("https://api.github.com/users/Preetham-jayam/repos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//write an async function which executes callback after finishing its async task

const asyncFn=(callback)=>{
    setTimeout(()=>{
        callback("done");
    },2000);
}

asyncFn((message)=>{
    console.log("callback",message);
})
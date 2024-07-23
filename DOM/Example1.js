//Highlight all thw ords over 8 characters long in the paragraph text with a yellow background

const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((word) => {
    return word.length > 8
      ? `<span style="background-color:yellow">${word}</span>`
      : word;
  })
  .join(" ");

//Add a link back to the source of the etxt after the paragraph tag

const sourceLink = document.createElement("a");
sourceLink.href = "https://forcemipsum.com";
sourceLink.innerHTML = "Text generated from lorem ipsum";

document.body.appendChild(sourceLink);

//Split each new sentence on to a seperate line in the para. A sentence can be assumed to be astring of text terminated with a perid of (.)

paragraph.innerHTML=paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>")+"</p>"

//Implement a click on todo item as fast as possible

// const items=document.querySelectorAll('.item');
// items.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         console.log("You clicked on item :"+item.innerText);
//     });
// });

const app=document.querySelector('.todo-app');
app.addEventListener('click',(e)=>{
    if(e.target && e.target.classList.contains('item')){
        console.log("You clicked on item :"+e.target.innerText);
    }
})




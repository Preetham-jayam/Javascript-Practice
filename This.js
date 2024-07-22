//task 1
// function getItem(){
//     console.log(this);
// }
// getItem(); //here this referes to global window object

//task2
// const item = {
//     title: 'Ball',
//     getItem() {
//     console.log(this); // here this refers to object
//     }
// }
// item.getItem(); // It will console entire object

//Task 3
// class Item {
//     title = 'Ball'
//     getItem() {
//     console.log(this);  // Refers to instance
//     }
// }
// const item = new Item();
// item.getItem();

//task 4
class Item {
  title = "Ball";
  getItem() {
    const this_=this;
    [1, 2, 3].map(function (item) {
      console.log(this_);
    });
  }
}
const item = new Item();
item.getItem();

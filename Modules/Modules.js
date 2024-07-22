
//Create a es6 module with function getName,getSurName and default export getFullName

export const getName=(name)=>name;
export const getSurName=(surname)=>surname;

export default (name,surname)=>`${getName(name)} ${getSurName(surname)}`;
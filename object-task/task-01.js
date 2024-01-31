// Access the golden rod color value in output.
const color = {
    red:'#ff0000',
    green:'gray',
    blue :'lightblue',
    "golden rod":"golden red"
}
// console.log(color["golden rod"]);

// For this object below add a property named passenger capacity with value 5


const car ={
    make:"toyota",
    model:"corolla",
    year:"2020"
}
// car['passenger capacity'] = 5;
// console.log(car);
car.passengerCapacity= 5;
// console.log(car);



// ....task-3...
// Display the physics marks as output.
const student ={
    name :'Alamin',
    id :'573190',
    physics:{
        sub:'HSC physics',
        mark:'50'
    }
}
// console.log(student);
// console.log(student.physics.mark);

// ....task-4....
// Count the number of properties.
let students={
name :'Alamin',
age :'20',
city :'Sherpur',
isStudent :true,
}
// const numOfPro = Object.keys(students).length;
// console.log(numOfPro);
// console.log(Object.keys(students).length);

// ....task-5...
// Loop through an object and print the key-value pairs with their types

const myObject={
    name :'Alamin',
    age : '25',
    city :'sherpur',
    isStudent:true
}
for(let key in myObject){
    if(myObject.hasOwnProperty(key)){
        let value =myObject[key];
        let type = typeof value;
        console.log(`key:${key},'|', value:${value} ,'|', type:${type}`);
    }
}

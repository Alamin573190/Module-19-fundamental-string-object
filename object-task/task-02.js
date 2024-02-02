const students ={
    name :{
       firstName: 'Alamin',
       lastName:'hossain'
    },
    roll : 573190,
    reg : 150,
    institute : 'SPI',
    district :'sherpur',
    "is married": false,
    sub:['CSE','Bangla'],
}
// new value asign......
students.roll=45;
//Add a new property 
students.age = 20;
// delete a property
delete students.reg;
// declar new object
// const y='name';
for( const student in students){
    // console.log(student ,typeof student);
    // console.log(students[student]);
}
console.log(students.name.lastName);
console.log(students.sub[1]);
const sentence = "I am  a learning web dev";
 
let reverse = ''
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);
let rev ='';
for (let i=0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev ;

}
// console.log(rev);

// .....object.....
// Non premitive
const bottal = {
    price : 45 ,
    brand :'apple',
    color : "white",
    isclean : false
}

const person = {
    name:"Alamin",
    age: 20 ,
    married:false ,
    
    profession: 'student',
}
// dot notation
console.log(person.name);
// const profe = person.profession;
// console.log(profe);
// ......brecket notation....
// console.log(person["age"])
// console.log(person.age);
// const boyos =person.age;
console.log(boyos);

person.age= 25;
console.log(person.age);

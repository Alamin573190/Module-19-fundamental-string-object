const collage ={
    name:'SPI',
    class:[ "11","12"],
    events: ['science fair', 'bijoy dibos','21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
        }
    }
}
// console.log(collage);
// console.log(collage.unique.result.gpa);
collage.class=['13','diploma'];
collage.events[2]="16 decembar";
console.log(collage.events);
delete collage['class'];
console.log(collage);
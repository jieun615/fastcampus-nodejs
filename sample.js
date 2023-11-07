// function get_members(){
//     return ['egoing', 'k8805', 'sorialgi'];
// }
// members = get_members();
// // members.length는 배열에 담긴 값의 숫자를 알려준다. 
// for(i = 0; i < members.length; i++){
//     // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
//     document.write(members[i].toUpperCase());   
//     document.write('<br />');
// }

// const form = document.querySelector('form');
// const emailInput = document.getElementById('email');
// const title = document.querySelector('h2');

// form.addEventListener('submit', handleEvent);

// function handleEvent(e) {
//     if (e.type ==='submit') {
//         e.preventDefault();
//     }
//     console.log(`Event Type: ${e.type}`);
//     //title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     title.textContent = e.target.value;
// }

// function Person(name, age, birthday) {
//     this.name = name;
//     this.age = age;
//     this.birthday = new Date(birthday);
//     this.calculateAge = function () {
//         const diff = Date.new() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     };
// }

// const john = new Person('john', 'john@example.com', '7-10-91');
// const han = new Person('han','han@example.com', '2-11-91');
// console.log(john);

// let count = 0;
// const cb = () => {
//     if (count < 2000) {
//         console.log(`Processing setImmediate cb ${++count}`);
//         setImmediate(cb);
//     }
// }
// setImmediate(cb);
// setTimeout(() => console.log('setTimeout executed'), 50)
// console.log('start');\

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate');
// });


const EventEmitter = require("events");

const celebrity = new EventEmitter();

celebrity.on("update post", () => {
    console.log('I like this post');
})

celebrity.on("update post", () => {
    console.log("I like it too");
})

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});
  
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

celebrity.emit("update post");
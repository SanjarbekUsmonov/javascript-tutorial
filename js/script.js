// function setAlphabet(){
//    let ar = [];
//  for(let i = 0; i < arguments.length; i++ ){
//       ar[i] = arguments[i]
//  }
//    console.log(ar.concat(['sanjar','sasha']));
// }
// setAlphabet('a','d','f','h')




// const ar = [1,2,3]
// const arr = []

// function setNumber(){
//    for(let i = 0; i < ar.length; i++){
//       arr[i] = ar[i]
//    }
//    console.log(arr.concat(['4','5','6']));
// }
// setNumber()


// const user = {
//    name: 'sanjar'
// }

// user.sayhi = function(){
//    console.log('hello '+this.name);
// }
// user.sayhi()




// let user = {
//    name: 'sanjar',
//    sayhi: function(){
//       console.log("hello "+user.name);
//    }
// }
// user.sayhi()




// function user (name){
//    let a = "Hello "+name
//    console.log(a);
// }
// user('sanjar')




// let user = 'sanjar'

// function sahyi(){
//    console.log(user + ' hello');
// }
// sahyi()




// function makeCounter (){
//    let currentCounter = 1
//    return function(){
//       return currentCounter++
//    }
// }

// let counter = makeCounter()
// console.log(counter());


// function sum (a){
//    return function(b){
//       return a*b
//    }
// }
// console.log(sum(3)(2));



// const cars = [
//     'Tesla',
//     'BMW',
//     'Mersedez',
//     'Kia',
//     'Toyota'
// ]

// const newCars = []

// cars.forEach(elem => {
//     console.log(elem);
// })







// for (var car of cars){
//     console.log(cars);
// }








// for(let i = 0; i < cars.length; i++){
//     newCars[i] = cars[i]
// }
// console.log(newCars);


// const array = [1,2,3,4,5,6,7,8,9,  -1, -2,-3,-4,-5,-6,-7,-8,-9]

// array.forEach(number =>{if(number > 4){console.log(number)}})

// const newArray = array.filter(number=>{return number > 0})
// console.log(newArray);






// function funk1(){
//     let chbox;

// chbox = document.getElementById('one')

// if(chbox.checked){
//     alert('qalaysan')
// }else(
//     alert('zormi')
// )
// }


// function funk1(){
//     let radi = document.getElementsByName('r1')
//     for(let i = 0; i < radi.length; i++){
//         if(radi[i].checked){
//             alert('bu ' +i+ ' element')
//         }
//     }
// }


// const add = function (a, b) {
//     if (b !== undefined)
//     return a + b
//     return (c)=> a+c
// }
// console.log(add(2, 5));
// console.log(add(5)(5));

// const array = [1,2,3,4,5,6,7,8]

// array.forEach(function(elem){
//   if(elem > 0){
//         console.log(elem * 2);
//   }
// })

// reduce

// let array = [2,2,2,2,-2,-2]
// let newArray = []

// newArray = array.reduce(function(sum,elem){
//     return sum += elem
// }, 10)
// console.log(newArray);
   // 10, sum ni o'ziga qabul qiladi

// reduce praktika  //reduce chapdan o'nga ko'radi reduceRight o'ngdan chapga ko'radi

// let frends = [
//     {name:"Sasha", books:["java","javascript"]},
//     {name:"Bos", books:["c++","c#"]},
//     {name:"Sasha", books:["python","Go"]},
// ]
// let array = []

// array = frends.reduceRight(function(sum,elem){
//     return [...sum,...elem.books]
// }, ['10'], )
// console.log(array);
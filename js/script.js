// Function bilan ishlash 1
// function aa (a){
//    return a * 2
// }
// console.log(aa(5));


//BU FOR LUP DA  2

// let array = [1,2,3,4,5,6,7,8,9]
// let newArray = []


// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i])
// }
// console.log(newArray);



//FOREACH FOR LUP BILAN BIR XIL LEKIN SODDAROQ 3
// let array = [1,2,3,4,5,6,7,8,9]
// let newArray = []

// array.forEach(function(elem){
//     newArray.push(elem)
// })

// console.log(newArray);


//BU FOREACH DA ARRAYLAR BILAN FOYDALANISH 4
// let newMalumot = []
// let malumot = [
//    {
//       ismi:  "Sanjar",
//       familyasi: "Usmonaliyev",
//       yoshi: 22,
//       email: "sanjari.@gmail.com"
//    },
//    {
//       ismi:  "Jon Doe",
//       familyasi: "Jon",
//       yoshi: 30,
//       email: "joniy.@gmail.com"
//    },
//    {
//       ismi:  "Abdullox",
//       familyasi: "Karimov",
//       yoshi: 10,
//       email: "abdull.@gmail.com"
//    },
// ]

// malumot.forEach(function(elem){
//    if(elem.yoshi > 10 ){
//         newMalumot.push(elem.ismi)
//    }
// })
// console.log(newMalumot);


//BU FOR LUP DA ARRAY LAR BILAN FOYDALANISH 5
// let newMalumot = []
// let malumot = [
//    {
//       ismi:  "Sanjar",
//       familyasi: "Usmonaliyev",
//       yoshi: 22,
//       email: "sanjari.@gmail.com"
//    },
//    {
//       ismi:  "Jon Doe",
//       familyasi: "Jon",
//       yoshi: 30,
//       email: "joniy.@gmail.com"
//    },
//    {
//       ismi:  "Abdullox",
//       familyasi: "Karimov",
//       yoshi: 10,
//       email: "abdull.@gmail.com"
//    },
// ]
// for(let i = 0; i < malumot.length; i++){
//      if(malumot[i].yoshi > 0){
//          newMalumot.push(malumot[i].yoshi)
//      }
    
// }
// console.log(newMalumot);

//MAP haqida tushuncha 6
// let array = [1,2,3,4,5,6,7,8,9]

// a = array.map(function(elem){
//     return elem * elem
// })
// console.log(a);

// MASSIV va MAP haqida tushuncha 7
// let malumot = [
//    {
//       ismi:  "Sanjar",
//       familyasi: "Usmonaliyev",
//       yoshi: 22,
//       email: "sanjari.@gmail.com",
//       uylanganmi: false
//    },
//    {
//       ismi:  "Jon Doe",
//       familyasi: "Jon",
//       yoshi: 30,
//       email: "joniy.@gmail.com",
//       uylanganmi: true
//    },
//    {
//       ismi:  "Abdullox",
//       familyasi: "Karimov",
//       yoshi: 10,
//       email: "abdull.@gmail.com",
//       uylanganmi: false
//    },
// ]
// a = malumot.map(elem=>{     
//     return{
//         ismlari: elem.ismi,
//         yoshlari: elem.yoshi

//     }
// })
// console.log(a);
//qo'shimcha bo'sh bo'lagan massivga tenglashtirsa ham bo'ladi "a" ni o'rniga


//Massivda Filtrni ishlatish  8

// let array = [1,2,3,4,5,6,7,8,9, -1,-2,-3,-4]
// a = array.filter(elem=>{
//     return elem > 4
//     return elem < 0
// })
// console.log(a);
//qo'shimcha bo'sh bo'lagan massivga tenglashtirsa ham bo'ladi "a" ni o'rniga

// Filtr amaliyotda json farmatda 9
// let malumot = [
//        {
//           ismi:  "Sanjar",
//           familyasi: "Usmonaliyev",
//           yoshi: 22,
//           email: "sanjari.@gmail.com",
//           uylanganmi: false
//        },
//        {
//           ismi:  "Jon Doe",
//           familyasi: "Jon",
//           yoshi: 30,
//           email: "joniy.@gmail.com",
//           uylanganmi: true
//        },
//        {
//           ismi:  "Abdullox",
//           familyasi: "Karimov",
//           yoshi: 10,
//           email: "abdull.@gmail.com",
//           uylanganmi: false
//        },
    // ]

    // a = malumot.filter(function(elem){
       // return elem.uylanganmi           //Filter faqat true ni ko'radi
    //    return elem.yoshi > 0
    // })
    // console.log(a);
    //qo'shimcha bo'sh bo'lagan massivga tenglashtirsa ham bo'ladi "a" ni o'rniga


    //Takrorlash

   //for lup massivlar bilan amalyot

let newMalumot = []
let malumot = [
   {
      ismi:  "Sanjar",
      familyasi: "Usmonaliyev",
      yoshi: 22,
      email: "sanjari.@gmail.com",
      uylanganmi: false
   },
   {
      ismi:  "Jon Doe",
      familyasi: "Jon",
      yoshi: 30,
      email: "joniy.@gmail.com",
      uylanganmi: true
   },
   {
      ismi:  "Abdullox",
      familyasi: "Karimov",
      yoshi: 10,
      email: "joniy.@gmail.com",
      uylanganmi: false
   },                                 
]

 newMalumot = malumot.filter(function(elem){
   return elem.email
})
console.log(malumot);
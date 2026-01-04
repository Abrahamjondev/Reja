// //MIT TASK

// TASK D:
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent ("mitgroup",
// "gmtiprou") return qiladi true;

//ANSWER
function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  const string1 = str1.split('').sort().join('');
  const string2 = str2.split('').sort().join('');

  return string1 === string2
}
//call
console.log(checkContent("mitgroup", "gmtiprou")); 
console.log(checkContent("nodemon", "express"));    
console.log(checkContent("done", "odne"));   

// //TASK C
// //MITASK-C

 //Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
 //MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// // @MITASK
// //
// const moment = require("moment");
// const date = moment().format("h:mm:ss a");
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     return `Hozir ${date} da: bizda ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola qoldi`;
//   }
//   sotish(mahsulot, soni) {
//     return (this[mahsulot] -= soni);
//   }
//   qabul(mahsulot, soni) {
//     return (this[mahsulot] += soni);
//   }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop.sotish("non", 3));
// console.log(shop.qabul("cola", 4));
// console.log(shop.qoldiq());

//TASK B
// function countDigit(a){
//     let count = 0;
//     for(let char of a){
//         if(char >= '0' && char <= '9'){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countDigit("ad2a54y79wet0sfgb9"));

// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log("=========");
// console.log(countLetter("e", "engineer"));
// console.log("=========");

// // NodeJS event loop va Callback functionlarni o'rganamiz
// //CALLBACK FUNCTIONS
// console.log("Jack Ma naslahatlari");
// const list = [
//   "Yaxshi talaba boling", //0-20 =>index [0]
//   "Togri boshliq tanlang va koproq xato qiling", //20-30. =>index [1]
//   "Uzingizga ishlashingizni boshlang", //30-40. =>index [2]
//   "Siz kuchli bolgan narsalarni qiling", //40-50 =>index [3]
//   "Yoshlarga investitisiya qiling", //50-60 =>index [4]
//   "Endi dam oling, foyasi yoq", //60++. =>index [5]
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("please insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0 ");
// maslahatBering(77, (err, data) => {
//   ///////CALLBACK FUNCTION
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1 ");

// LESSON 22
//Asynchronous functionlarni qo'llash
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("please insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a >= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);
//   }
// }
////CALL VIA //then, catch
// console.log("passed here 0 ");
// maslahatBering(75)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1 ");

// //CALL VIA/asyn/AWAIT
// async function run() {
//   let javob = await maslahatBering(75);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("please insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0 ");
// maslahatBering(77, (err, data) => {
//   ///////CALLBACK FUNCTION
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1 ");

//! MAVZU: MA'LUMOT TIPLARI(DATA TYPES)  //
//=====================================================//

// 1. Primitive (Oddiy) turlari
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol (buni keyin tushuntiraman)
// - BigInt
//=====================================================//
// 2. Non-Primitive (Murakkab) turlari
// - Object
// - Function
// - Array
// - Date (buni keyin tushuntiraman)
// - RegExp (buni keyin tushuntiraman)
// - Set (buni keyin tushuntiraman)
// - Map (buni keyin tushuntiraman)
//=====================================================//

//! Primitive turlariga misollar
let a = 5458; // number tiplar
console.log(typeof a); // turi number chiqadi
console.log(typeof Number); // turi function(constructor function) chiqadi
console.log("=====================");

let b = "Hello 2025"; //string tiplar
console.log(typeof b); // turi string chiqadi
console.log(typeof String); // turi function(constructor function) chiqadi

let ism = "Anvar";
let yosh = 25;
console.log(ism - yosh); // NaN chiqadi
console.log(ism + yosh); // Anvar25 chiqadi

let yili = "2025";
let soni = 25;
console.log(typeof (yili - soni)); // turi number chiqadi

console.log("=====================");

let c = false; //boolean tiplar
console.log(typeof c); // turi boolean chiqadi
console.log(typeof Boolean); // turi function(constructor function) chiqadi
console.log(105 > 95); // true chiqadi
console.log(typeof (105 > 95)); // turi boolean chiqadi
console.log(105 < 95); // false chiqadi
console.log(typeof (105 < 95)); // turi boolean chiqadi

console.log("=====================");

let d = null;
console.log(d); // null chiqadi
console.log(typeof d); // turi object chiqadi //!(Bu javascriptdagi xatolik hisoblanadi, eski kodlar manbasini buzib yubormaslik uchun o'zgartirilmagan. O'zi turi null qaytarsa maqsadga muvofiq deb qaraladi.)

console.log(typeof Null); // undefined chiqadi
console.log("=====================");

let e = undefined; //undefined tiplar
console.log(typeof e); // turi undefined chiqadi
console.log(typeof Undefined); // undefined chiqadi
console.log("=====================");

let f = Symbol("id"); //symbol tiplar
console.log(typeof f); // turi symbol chiqadi
console.log(typeof Symbol); // turi function(constructor function emas, built-in function[oldindan biz uchun yaratib qo'yilgan function]) chiqadi
console.log("=====================");

let g = BigInt(
	"12345678901234567890123456789012345678901234567890123456789012345678901234567890"
); //bigint tiplar
console.log(typeof g);
console.log(typeof BigInt); // turi function(constructor function emas, built-in function[oldindan biz uchun yaratib qo'yilgan function]) chiqadi
console.log("=====================");

//! Non-Primitive turlariga misollar
let h = {}; //object tiplar
console.log(h); // {} chiqadi, ya'ni bo'sh obyekt chiqadi
console.log(typeof h); // turi object chiqadi
console.log(typeof Object); // turi function(constructor function) chiqadi
console.log("=====================");

let i = function () {}; //function tiplar
console.log(i); // function ning o'zi chiqadi
console.log(i()); // function ning qaytaradigan qiymati chiqadi(Functionning o‘zi hech narsa qaytarmagani uchun (return yo‘q), default qiymati undefined chiqadi)
console.log(typeof i); // turi function chiqadi
console.log(typeof Function); // turi function(constructor function) chiqadi
console.log("=====================");

let j = []; //array tiplar
console.log(j); // Bo'sh array chiqadi, ya'ni [] chiqadi
console.log(typeof j); // turi object chiqadi
console.log(typeof Array); // turi function(constructor function) chiqadi */

// JS da malumot turlari 2 turga bo'linadi:

//!--------------------------------------------

// 1. Primitive (Oddiy) turlari
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol
// - BigInt
//=====================================================//
// 2. Non-Primitive (Murakkab yoki Reference) turlari
// - Object
// - Function
// - Array
//=====================================================//

// 1. Primitive (Oddiy) turlari

//? STRING TURI

/* let ism = "Abror";
let familya = " Narimonov";

console.log(ism + familya); // string larda concatination amali deb aytiladi. Yani string ichidagi malumotlarni yonma yon qo'shish amali.

let nomi = "Abror";
let yosh = 15;
let balandlik = 1.75;

console.log(nomi + yosh + balandlik); // natijada string chiqadi
console.log(typeof (nomi + yosh + balandlik));

console.log(yosh + balandlik);
console.log(typeof (yosh + balandlik)); // natijada string chiqadi */

/* let yozuv = "10" + "5";
let yozuv2 = "30" - "35";
let yozuv3 = "10" * "5";
let yozuv4 = "10" / "5";
console.log(yozuv); // natijada 10+5 chiqadi
console.log(yozuv2); // natijada 10-5=5 chiqadi
console.log(yozuv3);
console.log(yozuv4); */

/* let bosh = "  Abror";
console.log(bosh);
console.log(typeof bosh); // natijada string chiqadi */

/* let num = 123456;
let ism = "Abror";

console.log(num - ism);
console.log(typeof (num - ism)); */

/* console.log(typeof String); // konstruktor funksiya qaytaradi */

//? NUMBER TURI

/* let son1 = 2025;
let son2 = 3.14;

console.log(son1 + son2);
console.log(typeof (son1 + son2)); */

/* console.log(typeof Number); // konstruktor funksiya qaytaradi */

//? BOOLEAN TURI

/* let a = 3000;
b = 3001;

console.log(typeof (a == b)); */

/* console.log(typeof Boolean); // konstruktor funksiya qaytaradi */

//! ----------- PRIMITIVLARNING DAVOMI KEYINGI DARSDA TUSHUNTIRILIADI -----------

// Object lar

// let abror = "Odi: Abror, Yoshi: 15, Balandligi: 1.75";

// let obj1 = {
// 	name: "Abror",
// 	age: 15,
// 	height: 1.75,
// };

// console.log(obj1.age);
// console.log(obj1.name);
// console.log(obj1.height);

// let massiv = ["Abror", 15, 1.75, true];

// console.log(typeof massiv);

//   function amal_bajar(tur) {
// 	console.log(typeof tur); // qiymat qaytarmaydigan funksiya
// }

// amal_bajar(123); // number
// amal_bajar("Abror"); // string
// amal_bajar(String); // boolean

/* function hisoblab_ber(son1, son2) {
  return son1 + son2;
}

let natija1 = hisoblab_ber(5, 10);
let natija2 = hisoblab_ber("Anvar", 30);

console.log(typeof (natija1 + natija2)); // qiymat qaytaradigan funksiya

console.log(natija1 + natija2); */

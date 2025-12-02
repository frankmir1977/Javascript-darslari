//? ======ARIFMETIK OPERATORLAR(ARITHMETIC)=======

//? 1. + qo'shish operatori (addition)
//? 2. - ayirish operatori (subtraction)
//? 3. * ko'paytirish operatori (multiplication)
//? 4. / bo'lish operatori (division)
//? 5. % qoldiq operatori (modulus)
//? 6. ** daraja operatori (exponentiation)

//? 7. ++ orttirish operatori(increment)  i++(post-increment), ++i(pre-increment)

//? 8. -- kamaytirish operatori(decrement)  i--(post-decrement), --i(pre-decrement)

//* =======TAYINLASH OPERATORLARI(ASSIGNMENT)========

//? 1. = tayinlash operatori
//? 2. += qo‘shib tayinlash operatori
//? 3. -= ayirib tayinlash operatori
//? 4. *= ko‘paytirib tayinlash operatori
//? 5. /= bo‘lib tayinlash operatori
//? 6. %= qoldiqni saqlab tayinlash operatori
//? 7. **= darajaga ko‘tarib tayinlash operatori

//**TAYINLASH OPERATORLARI INGLIZCHASI BILAN**

//? 1. = tayinlash (assignment)
//? 2. += qo‘shib tayinlash (addition assignment)

//? 3. -= ayirib tayinlash (subtraction assignment)

//? 4. *= ko‘paytirib tayinlash (multiplication assignment)

//? 5. /= bo‘lib tayinlash (division assignment)

//? 6. %= qoldiqni saqlab tayinlash (modulus assignment)

//? 7. **= darajaga ko‘tarib tayinlash (exponentiation assignment)

//?===================================//

//!MISOLLAR

console.log("5" + 3); // 53
console.log(5 + true); // 6
console.log(5 + false); // 5
console.log("5" - 3); // 2
console.log("5" * "2"); // 10
console.log("10" / 2); // 5
console.log(10 - "2x"); // NaN
console.log("5" * "2"); // 10
console.log(true * 5); // 5
console.log(true % "besh"); // NaN
console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity
console.log(10 % 3); // 1
console.log(-10 % 3); // -1
console.log(2 ** (3 ** 2)); // 512
console.log(2025 - undefined); // NaN
console.log(undefined + 5); // NaN
console.log(null + 5); // 5
console.log(null * 5); // 0
console.log(5 / null); // Infinity

let i = 5;
console.log(i++ + ++i); // 12

let j = 3;
console.log(j-- + --j); // 4

let x = "5";
x += 2;
console.log(x); // 52

let y = "10";
y -= 2;
console.log(y); // 8

let z = "3";
z *= "2";
console.log(z); // 6

let a = 20;
a /= 5;
console.log(a); // 4

let b = 17;
b %= 5;
console.log(b); // 2

let c = 2;
c **= 3;
console.log(c); // 8

let d = "2";
d **= 3;
console.log(d); // 8

let e = "2";
e **= "3";
console.log(e); // 8

let f = "2";
f **= "3x";
console.log(f); // NaN

let g = "2";
g **= "3y";
console.log(g); // NaN

let h = "2";
h **= "3z";
console.log(h); // NaN

//!===================================//

// undefined qiymati bilan har qanday arifmetik amal bajarilganda natija NaN bo'ladi

// true qiymati 1 ga teng, false qiymati 0 ga teng

// string va number qiymatlari bilan arifmetik amallar bajarilganda, string qiymatlar avtomatik ravishda number ga aylantiriladi, faqatgina qo'shish operatori (+) istisno, u ikkala qiymatni string ga aylantiradi va ularni birlashtiradi (konkatinatsiya qiladi). Bu holatda qavslarga e'tibor berish kerak!!!

// true 1 ga teng, false 0 ga teng

// null qiymati - arifmetik amallar bajarilganda 0 ga teng

// undefined qiymati - arifmetik amallar bajarilganda NaN ga teng

// har qanday musbat son 0 ga bo'linganda natija Infinity bo'ladi

// manfiy son 0 ga bo'linganda natija -Infinity bo'ladi

// daraja operatori (**) chapdan o'ngga bajariladi, lekin ichma-ich darajalar hisoblanganda u o'ngdan chapga bajariladi

// +=, -=, *=, /=, %=, **= operatorlari aynan shu o'zgaruvchining joriy qiymatini yangilash uchun ishlatiladi

// post-increment (i++) va post-decrement (i--) operatorlari avval joriy qiymatni ishlatadi, keyin qiymatni oshiradi yoki kamaytiradi

// pre-increment (++i) va pre-decrement (--i) operatorlari avval qiymatni oshiradi yoki kamaytiradi, keyin joriy qiymatni ishlatadi
//!===================================//

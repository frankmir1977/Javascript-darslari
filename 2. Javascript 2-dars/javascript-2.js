//=================================================================//
// window va document obyektlari

//console.log(window); bu bizga window obyektini chiqaradi. window obyektining ichidagi barcha imkoniyatlarni console oynasida ko'rishimiz mumkin.

//================================================================//
// inline, external CSS va .js fayli orqali stil berishda qaysi biri kuchli?

//.js fayli orqali stil berish ≈ inline stil >> external stil

// Agar html faylga - ham html fayl ichida inline, ham CSS faylda external, ham .js faylda stil beriladigan bo'lsa, .js faylidagi berilgan stil kuchliroq bo'ladi. Chunki u oxir oqibat inline bo'lib html faylda qabul qilinadi(inline qilib berilgan style ni o'zgartiradi).

// document.getElementById("ota").style.width = "100px";
// document.getElementById("ota").style.height = "100px";
// document.getElementById("ota").style.backgroundColor = "red";
// Bu koddagi stil boshqa inline va external CSS da berilgan stillardan ustun hisoblanadi. Shuning uchun ekranda ushbu stilning natijasi ko'rinadi.

//!Eslatma: !important bilan berilsa, bu eng kuchli stil berish hisoblanadi.

// Document vs document

// Document.getElementById("ota").style.width = "200px";
// Document.getElementById("ota").style.height = "200px";
// Document.getElementById("ota").style.backgroundColor = "green";
// Bu koddagi stillar ishlamaydi, chunki bunda Document class orqali(to'g'rirog'i interface/tip orqali) stil berilgan.
// Odatda stil document obyektining ichidagi style obyektiga beriladi.

//==================================================================//
// Dialog oynasini chiqaruvchi funksiyalar: alert(), prompt(), confirm()

//---------------------------------------------
// let malumot = alert("Siz alert funksiyasini chaqirdingiz.");

// Bunda browserimizda ichida bitta OK tugmaga ega bo'lgan alert(ogohlantirish, malumot berish) modal oynasi chiqadi. OK bosilsa, alert oynasi yopiladi.

// console.log(malumot); natijasi undefined qiymatini qaytaradi

//---------------------------------------------
// let ism = prompt("Sizni ismingiz nima?");
// bunda browserimizda yangi modal oynasi chiqadi, ichida bitta textbox va OK, Cancel tugmalari bo'ladi. OK bosilsa, textbox dan kiritilgan ma'lumot ism o'zgaruvchisiga qabul qilinadi.

// console.log(ism);  natijasi prompt() funksiyasi orqali kiritilgan qiymatni qaytaradi
// console.log(typeof ism); natijasi string qiymatini qaytaradi

//Agar Cancel tugmasi bosilsa null qaytaradi.

//---------------------------------------------
// let javob = confirm("Saytda qolishni hohlaysizmi?");
// Bunda hech qanday textbox bo'lmagan lekin OK va Cancel tugmalari bo'lgan modal oynasi chiqadi.

// console.log(javob);  true(OK bosilsa) yoki false(Cancel bosilsa) qiymatini qaytaradi
// console.log(typeof javob); turi boolean bo'ladi.

//==================================================================//
// var, let va const kalit so'zlari orqali o'zgaruvchilarni e'lon qilish

//--------------------------------------
//let ism = "Abror";
//ism = "Sobirjon";
//ism = "Shoxjaxon";

// console.log(ism); natijasi "Shoxjaxon" qiymatini(oxirda berilgan qiymatni) qaytaradi

// Agar let bilan e'lon qilsak, unga yana qiymat bera olamiz.

//--------------------------------------
//const odi = "Abror";
//odi = "Sobirjon";
//odi = "Shoxjaxon";

// console.log(odi);  Xatolik chiqaradi(Uncaught TypeError: Assignment to constant variable. - const o'zgaruvchisiga bir marta qiymat berilgandan keyin o'zgartirish mumkin emas.)

// Agar const bilan e'lon qilsak, unga yana qiymat bera olmaymiz.

//--------------------------------------
// var nomi = "Suxrob";
// nomi = "Asilbek";
// nomi = "Hasanboy";

// console.log(nomi); natijasi "Hasanboy" qiymatini qaytaradi

// var bilan e'lon qilsak, unga yana qiymat bera olamiz.
// var dan foydalanganda ehtiyot bo'lishimiz kerak. Masalan: var bilan bitta o'zgaruvchi e'lon qilsak, shu nom bilan yana o'zgaruvchi e'lon qilib unga boshqa qiymat bersak ham xatolik chiqarmaydi.

// Masalan:
/* 
var a = 5;
var a = 30; 
console.log(a); // Natija: 30 chiqadi

Bunda ham xatolik chiqarmaydi va a ning keyingi qiymati(30) ekranga chiqadi,
!Lekin, bu misolimizda a lar bitta joyda e'lon qilingan. Agar ular kodning turli joyida e'lon qilinsa dasturchi qaysi qiymat oxirgi amal qilayotganini ko‘rmay qolishi va chalkashishi mumkin. Shuning uchun var dan iloji boricha foydalanilmaydi.
*/

//==================================================================//
// Document vs document (kengroq tushuntirish)

//----------------------------------------------
/* Document bu class
Nazariy jihatdan: Class — bu obyektlar uchun shablon. U qanday property va metodlarga ega bo‘lishini belgilaydi.
Amaliy jihatdan: JS’da class orqali yangi obyektlar yaratish, kodni tartibga solish va qayta foydalanish osonlashadi.
•	Bu DOM API’dagi class (tip).
•	HTML yoki XML hujjatni ifodalovchi konstruktor sifatida mavjud.
•	Unda sahifa bilan ishlash uchun metodlar va propertylar belgilangan.
•	O‘zi shablon, ya’ni “qanday obyekt bo‘lishi kerak”ni ko‘rsatadi.
*/

/*
document - esa obyekt
•	document — bu brauzerda ochilgan joriy HTML hujjatni ifodalovchi obyekt.
•	U Document class’ining instansiyasi (ya’ni real obyekti).
•	document orqali biz sahifadagi barcha elementlarga kirishimiz, ularni o‘zgartirishimiz va boshqarishimiz mumkin.
•	Brauzerda ochilgan joriy sahifani(biz kod yozayotgan sahifani) ifodalaydi.
•	Biz amalda ishlatadigan obyekt — elementlarni olish, o‘zgartirish, event qo‘shish va hokazo.
 */

//================================================================//
// DOM haqida qisqacha

/* DOM (Document Object Model) — bu brauzer HTML sahifani yuklaganda hosil qiladigan daraxt.

Daraxtning ildizi — <html> tegi.

Uning ichida bolalar tugunlari bor: <head> va <body>.

<body> ichida yana boshqa tugunlar (<div>, <h1>, <p>, <ul>, <li> va hokazo).

Har bir teg — node (tugun), matnlar esa text node sifatida ko‘rsatiladi.


JavaScript DOM orqali sahifadagi elementlarni topadi (getElementById, querySelector).

DOM yordamida matnni o‘zgartirish, rang berish, tugma bosilganda yangi element qo‘shish mumkin.

Dinamik web sahifalar (masalan, tugma bosilganda menyu ochilishi) DOM orqali ishlaydi.
*/

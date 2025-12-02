//? MA'LUMOT TURLARI (DATA TYPES)
// Javascript da ma'lumot turlari 2 ga bo'linadi:
// 1. Primitive Data Types (Primitive ma'lumot turlari - qiymat turlari)
// 2. Non-Primitive Data Types (Non-Primitive ma'lumot turlari - obyekt turlari, reference turlari yoki murakkab turlar(ichida birdan ortiq ma'lumotni key-value (kalit-qiymat) juftligi ko'rinishida saqlaydi))

// 1) Primitive Data Types

// 1. String "kjdfkjkfdj"
// 2. Number 55544.254
// 3. Boolean true / false
// 4. Null
// 5. Undefined
// 6. Symbol (buni keyin tushuntiraman)
// 7. BigInt

// 2) Non-Primitive Data Types

// 1. Object
// 2. Function
// 3. Array
// 4. Date (buni keyin tushuntiraman)
// 5. RegExp (buni keyin tushuntiraman)
// 6. Set (buni keyin tushuntiraman)
// 7. Map (buni keyin tushuntiraman)

//--------------------------------------------------------//

//1. String

// let ismi = "Aslbek";
// let familyasi = "Nasriddinov";

// console.log(ismi);
// console.log(typeof ismi); // string
// console.log(typeof familyasi); // string

// let ismi = "Aslbek";
// let yoshi = "O'n besh";
// let balandligi = 1.5;

// Qo'shish amali bo'lsa ichida bitta string bo'lsa hammasini string ga aylantirishga harakat qiladi.

//ko'paytiruv, bo'luv va ayiruv amallarida esa ularni songa aylantirishga harakat qiladi.
// Agar songa aylantira olmasa NaN (Not a Number) qaytaradi.
// console.log(typeof (ismi + yoshi));
// console.log(typeof (yoshi - balandligi));
// console.log(yoshi - balandligi);

// console.log(typeof Boolean);

//-----------------------------------//

// let Feruzbek = {
// 	ism: "Feruzbek",
// 	familya: "Erkinov",
// 	yosh: 15,
// 	balandlik: 1.75,
// };

// let Umidbek = {
// 	ism: "Umidbek",
// 	familya: "Qurbonov",
// 	yosh: 15,
// 	balandlik: 1.8,
// };

// console.log(typeof Umidbek.yosh);

// let nomi = ["Olma", "Banan", "Anor", "Behi", "Nok", "Olcha"];

// let nomi2 = ["Olma", "Banan", "Anor"];

// function mevalarniSanash(mevalar) {
// 	return "Mening savatimda " + mevalar.length + "ta meva bor";
// }

// let soni = mevalarniSanash(nomi);
// let soni2 = mevalarniSanash(nomi2);
// console.log(soni);
// console.log(soni2);

// mevalarniSanash.name = "Mevalarni sanash funksiyasi";
// mevalarniSanash.length;

// console.log(mevalarniSanash.name);

// let mashina = {
// 	nomi: "BMW",
// 	rangi: "Qora",
// 	yili: 2020,
// 	narxi: 15000,
// 	chegirmasi: null,
// };

// console.log(typeof mashina.chegirmasi);

// let aaa = null;
// console.log(typeof aaa); // true

// let favourite = `Yahshi ko'rgan mashinam
// ${mashina.nomi}, rangi esa ${mashina.rangi}`;

// console.log(favourite);

let son = 5;

// let mashina = {
// 	nomi: "BMW",
// 	rangi: "Qora",
// 	yili: 2020,
// 	narxi: 15000,
// 	modellari: {
// 		X5: 2020,
// 		X6: 2021,
// 		X7: 2022,
// 	},
// };

// console.log(Date.length);
// console.log(Date);
// console.log(Date.prototype);

// console.log(String.prototype);
// console.log(Number.prototype);

// console.log(Boolean.prototype);
// console.log(Object.prototype);

// console.log(mashina.tezligi);
// console.log(typeof mashina.tezligi);

// console.log(mashina.chegirmasi);

//?======MALUMOT TURLARI (DATA TYPES)========//

// 1) Primitive Data Types, value types, simple types

// 1. String "kjdfkjkfdj"
// 2. Number 55544.254
// 3. Boolean true / false
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// 2) Non-Primitive Data Types, reference types, complex types, object types

// 1. Object
// 2. Function
// 3. Array

// let a = 12;
// let b = a;

// let mashina1 = {
// 	nomi: "BMW",
// 	rangi: "Qora",
// 	yili: 2020,
// 	narxi: 15000,
// };

// mashina1.nomi = "Audi";

// console.log(mashina1.nomi);

// console.log(mashina);

// console.log(mashina.nomi);

// let mashina2 = mashina1;

// mashina2.nomi = "Mercedes";

// console.log(mashina1.nomi);

// let boshlanish_kuni = 5;

// console.log("boshlanish kuni:" + boshlanish_kuni);
// boshlanish_kuni = boshlanish_kuni + 5;

// console.log("Tugash kuni:" + boshlanish_kuni);

// let mashina1 = {
// 	nomi: "BMW",
// 	rangi: "Qora",
// 	yili: 2020,
// 	narxi: 15000,
// };

// let mashina2 = mashina1;

// console.log(mashina2);

//--NULL va UNDEFINED farqi--//

// let a = 5;

// let mashina = {
// 	nomi: "Toyota",
// 	rangi: ["Oq", "Qora"],
// 	yili: [2021, 2022, 2023],
// 	manzil: null,
// };

// console.log(typeof mashina);

// console.log(typeof mashina.manzil);

// console.log(mashina.bahosi);

// let telefon;

// console.log(telefon);

// let m = 545454545454545454545454545445454545454545454545454545454545454545454;

// let p = 488686846465165151654464546546445445454545447778787878787847;

// console.log(typeof m);
// console.log(typeof p);

// console.log(m + p);

// console.log(typeof String);

//?======MALUMOT TURLARI (DATA TYPES)========//
// 1) Primitiv turlar, qiymat turlar, value types, simple types

// 2) Non-primitiv turlar, murakkab turlar, obyekt turlar, reference turlar

// let ism = "Umidbek";

// let Umidbek = {
// 	ism: "Umidbek",
// 	familya: "Qurbonov",
// 	yosh: "15",
// 	balandlik: 1.8,
// 	qiziqishlari: {
// 		sport: "Football",
// 		dasturlash: "Python",
// 		fanlar: "Adabiyot",
// 		uyinlar: "Free Fire",
// 	},
// 	sertifikatlari: null,
// 	telefon_modeli: "Samsung Galaxy A12",
// };

// console.log(typeof Umidbek.qiziqishlari.sport);

// console.log(typeof Umidbek.sertifikatlari);

// console.log(Umidbek.telefon_modeli);

// let y;

// console.log(y);

// let son1 =
// 	454454557444787487878787878787878787878787878787878787878787878787845444n;
// let son2 = 6658478787878787878787878787878787878787878787878787878787878765n;

// console.log(son1 + son2);
// console.log((son1 + son2).toString());

// console.log(typeof son1);
// console.log(typeof son2);
// console.log(typeof (son1 + son2));

// console.log(typeof BigInt(5));
// console.log(typeof String);

// let ism1 = 2025;
// let ism2 = 2030;

// console.log("bu sonlarning yig'indisi   " + ism1 + ism2);

// ``;

// let birinchi = 5;
// let ikkinchi = 10;

// let javob = {
// 	hisoblovchi_ismi: "Aslbek",
// 	birinchi_son: birinchi,
// 	ikkinchi_son: ikkinchi,
// 	natija: birinchi + ikkinchi,
// };

// console.log(javob.hisoblovchi_ismi);

// let uquvchi1 = {
// 	ism: "Ali",
// 	familya: "Valiyev",
// 	yosh: 16,
// 	balandlik: 1.75,
// 	manzil: null,
// 	qiziqishlari: {
// 		sport: "Basketbol",
// 		dasturlash: "JavaScript",
// 		musiqa: "Pop",
// 	},
// };

// console.log(uquvchi1);

// let uquvchi2 = uquvchi1;

// uquvchi2.ism = "Behruz";

// console.log(uquvchi1);
// console.log(uquvchi2);

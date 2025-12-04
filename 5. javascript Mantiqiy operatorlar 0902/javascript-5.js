//?TAQQOSLASH OPERATORLARI(COMPARISON OPERATORS)//
//
// 1. == teng operatori
// 2. != teng emas operatori
// 3. > katta operatori
// 4. < kichik operatori
// 5. >= katta yoki teng operatori
// 6. <= kichik yoki teng operatori

// == operatori qiymatlarning tengligini tekshiradi.

// console.log(5 == 5);
// console.log(2025 != 2030);
// console.log(5 === "5");

// console.log(0 == true);
// console.log(0 == false);
// console.log(0 === false);
// console.log({ ism: "Anvar" } == { ism: "Anvar" });

// console.log(10 > 12);
// console.log(12 >= 12);

// console.log(45 + null);
// console.log(45 * null);
// console.log(45 / null);

// console.log(5 !== "5");

// console.log(null == 0); // false
// console.log(null != 0); // true

// console.log(5 + null);

// console.log(5 != null);

// console.log(5 == "5");

// console.log(5 == "5.0");

// console.log(5 === 5);

// console.log(5 === "5");

// console.log(5 !== 10);

// console.log(undefined == 0); // false
// console.log(undefined != 0); // true

// console.log(10 > null);

// console.log(undefined < 12);
// console.log(undefined > 12);

// console.log(typeof undefined);

// console.log(null >= 0);

// console.log(null > 0);

//! Qoida: solishtirishlar qiymat turi bilan bo'ladi.

//! Bunda shunday qoida bor:
//! Agar NULL yoki UNDEFINED lar boshqa qiymatlar bilan == yoki != operatorlari bilan solishtirilsa qiymatlar number ga aylantirilmasdan solishtiriladi. UNDEFINED va NULL har doim bir biriga teng va ular boshqa hech bir qiymatga teng emas.
//! NULL va UNDEFINED lardan tashqari boshqa hamma qiymatlar songa o'tqazilib qiymatlari solishtiriladi.

//! Agar >,<,>=,<= operator ishlatilsa qiymatlar number ga aylantirilib solishtiriladi solishtiriladi(bu NULL va UNDEFINED lar uchun ham bajariladi).

// Bunga misollar:

// console.log(undefined > null);
// console.log(0 == false); // true
// console.log(0 == null); // false
// console.log(0 != null); // true
// console.log(0 == undefined); // false
// console.log(0 == ""); // true
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(0 > null); //false
// console.log(0 > undefined); //false
// console.log(0 < null); //false
// console.log(0 < undefined); //false
// console.log(0 > undefined); //false

// console.log(0 >= null); //true

// console.log(0 >= undefined); //false, chunki undefined songa o'tqazilganda NaN ga aylantiriladi

// console.log(0 <= null); //true

// console.log(0 <= undefined); //false, chunki undefined songa o'tqazilganda NaN ga aylantiriladi

// 1. == teng operatori (loose equality
//(yumshoq tenglik))

// Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 == "5"); // true
// console.log(5 === "5");
// console.log(5 == "4"); // false
// console.log(5 == "6"); // false
// console.log(5 == "5.0"); // true
// console.log(0 == false); // true
// console.log(0 === false);
//console.log(0 == null); //? false, bu holat == operatori null da ishlatilishi qoidasi tushadi.
//console.log(0 == undefined); //? false, bu holat == operatori undefined da ishlatilishi qoidasi tushadi.

// console.log(0 == ""); // true
// console.log(0 > "");
// console.log(0 < "");
// console.log(0 >= "");
// console.log(0 <= "");

//"" ni songa aylantirganda uning qiymati 0 ga teng bo'ladi.

// 2. != teng emas operatori (loose not equal)
// Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 != "5"); // false
// console.log(5 != "4"); // true
// console.log(5 != "6"); // true
// console.log(5 != "5.0"); // false
// console.log(0 != false); // false
// console.log(0 != null); //? true, bu holat != operatori null da ishlatilishi qoidasi tushadi.
// console.log(0 != undefined); //? true, bu holat != operatori undefined da ishlatilishi qoidasi tushadi.
// console.log(0 != ""); // false

//! >,<,>=,<= operator ishlatilsa qiymatlar number ga aylantirilib solishtiriladi, HATTOKI NULL va UNDEFINED lar uchun ham bajariladi. NULL songa aylantirilsa 0 ga teng. UNDEFINED songa aylantirilsa NaN ga teng. Muhim eslatma: NaN bilan taqqoslash har doim false bo'ladi.

// 3. > katta operatori (greater than)
// Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirishdan ma'no yo'q.

// console.log(5 > "4"); // true
// console.log(5 > "5"); // false
// console.log(5 > "6"); // false
// console.log(5 > "5.0"); // false
// console.log(0 > false); // false
// console.log(0 > null); // false
// console.log(0 > undefined); // false
// console.log(0 > ""); // false

// 4. < kichik operatori (less than)
//Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirishdan ma'no yo'q.

// console.log(5 < "4");
// console.log(5 < "5");
// console.log(5 < "6");
// console.log(5 < "5.0");
// console.log(0 < false);
// console.log(0 < null);
// console.log(0 < undefined);
// console.log(0 < "");

// 5. >= katta yoki teng operatori (greater than or equal)
// Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 >= "4");
// console.log(5 >= "5");
// console.log(5 >= "6");
// console.log(5 >= "5.0");
// console.log(0 >= false);
// console.log(0 >= null);
// console.log(15 >= undefined);
// console.log(0 >= "");
// console.log(null >= undefined); //!
// console.log(null == undefined); //!
// console.log(null === undefined); //!

// console.log(typeof undefined);

// 6. <= kichik yoki teng operatori (less than or equal) Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 <= "4");
// console.log(5 <= "5");
// console.log(5 <= "6");
// console.log(5 <= "5.0");
// console.log(0 <= false);
// console.log(0 <= null);
// console.log(0 <= undefined);
// console.log(0 <= "");

//! QAT'IY TENGLIK(STRICT EQUALITY)
//! Bunda qiymati ham ma'lumot turi ham taqqoslanadi.
// 7. === teng teng operatori (strictly equal(qat'iy tenglik))

// console.log(5 === "5");
// console.log(5 === "4");
// console.log(5 === "6");
// console.log(5 === "5.0");
// console.log(0 === "");
// console.log(0 === false);
// console.log(0 === null);
// console.log(0 === undefined);

// 8. !== teng emas operatori (strictly not equal(qat'iy teng emaslik))

// console.log(5 !== "5");
// console.log(5 !== "4");
// console.log(5 !== "6");
// console.log(5 !== "5.0");
// console.log(0 !== "");
// console.log(0 !== false);
// console.log(0 !== null);
// console.log(0 !== undefined);

//*************** MISOLLAR ***************//

// console.log(5 == 5);
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 >= 10);
// console.log(5 <= 10);
// console.log(5 != 10);
// console.log(5 != 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 !== "5");
// console.log(5 === 5);
// console.log(5 !== 5);
// console.log(5 >= 5);
// console.log(5 <= 5);
// console.log(2025 !== undefined);
// console.log(2025 === undefined);
// console.log(2025 == undefined);
// console.log(2025 != undefined);
// console.log(2025 > undefined);
// console.log(2025 < undefined);
// console.log(2025 >= undefined);
// console.log(2025 <= undefined);

// console.log(5 === "4");
// console.log(5 !== "4");

//? =MANTIQIY OPERATORLAR(LOGICAL OPERATORS)=//

//? 1. && and operatori (VA operatori)
//? 2. || or operatori (YOKI operatori)
//? 3. ! not operatori (EMAS operatori)

// let ismi = "Anvar";
// let parol = "12345";
// let yoshi = 15;

// console.log(ismi == "anvar");
// console.log(parol == "12345");
// console.log(yoshi >= 15);

let ism = "Anvar";
let parol = "12345";
let yosh = 15;

// console.log(ism == "Anvar")
// console.log(ism == "anvar");

// console.log(parol == "12345");
// console.log(parol == 12345);
// console.log(parol === 12345);
// console.log(parol == "123456");
// console.log(yosh == 15);

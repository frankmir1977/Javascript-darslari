/* window — bu brauzerdagi global obyekt, ya’ni JavaScript’da hamma narsaning “ota konteyneri”. Agar siz console.log(window) desangiz, juda katta obyekt chiqadi. Unda brauzer API-lari, global funksiyalar, DOM bilan ishlash vositalari, va foydali propertylar jamlangan.

Console.log(window) orqali window obyektining ichini ko’ring!

document — bu brauzerda HTML sahifani ifodalovchi obyekt. U window ichida joylashgan va DOM (Document Object Model) orqali sahifani boshqarish imkonini beradi. Aslida, biz ko‘rayotgan har bir <div>, <p>, <img> va boshqa elementlar document ichida tugun (node) sifatida saqlanadi.

Console.log(document) orqali joriy document obyektining ichini ko’rish
Console.dir(Document) orqali document obyektining ichini ko’rish



Quyidagi misolda document obyektining ichidagi obyektlarga kirilgan:
document.body.style.backgroundColor = "red";

-	document
•	Bu obyekt.
•	DOM (Document Object Model) ning ildiz obyekti bo‘lib, butun HTML hujjatni ifodalaydi.

-	document.body
•	Bu ham obyekt.
•	HTML’dagi <body> elementini ifodalaydi.
•	Unda innerHTML, children, style kabi property’lar mavjud.

-	document.body.style
•	Bu CSSStyleDeclaration obyektidir.
•	<body> elementining barcha CSS xususiyatlarini o‘zida saqlaydi.
•	Masalan: style.color, style.margin, style.backgroundColor.

-	document.body.style.backgroundColor
•	Bu obyekt emas, balki property (qiymat).
•	U string tipidagi qiymatni saqlaydi (masalan "red", "blue", "rgb(255,0,0)").
•	Agar siz document.body.style.backgroundColor = "yellow"; desangiz, <body> fonini sariq rangga o‘zgartirasiz.



*/

/* 

Extension:

-better comments
-auto rename tag


Comment(sharh) berish

CTRL+K=>C    comment berish
CTRL+K =>U    comment ni olib tashlash

Agar bittada ko’p qatorga comment berish kerak bo’lsa, belgilab yana shu shortcut lar ishlatiladi.


SHIFT+ALT=>A  multiline comment ochish uchun shortcut
CTRL+/   bir qatorli comment ochish uchun shortcut


Better comments ning imkoniyatlari:

! → Muhim / xatolik (qizil rangda ko‘rinadi)

? → Savol / tushunarsiz joy (ko‘k rangda ko‘rinadi)

* → Ta’kid / muhim eslatma (yashil rangda ko‘rinadi)

TODO → Bajarilishi kerak bo‘lgan ish (to‘q sariq rangda ko‘rinadi)


Extension:

Javascript console utils   - console.log() larni olib tashlash uchun ishlatiladi

Shortcut: CTRL+SHIFT+D
__________________________________________________________________________
console.log() haqida
• Ma’lumotni konsolga(hech qanday UI siz) chiqaradi (brauzer dev tools da).
• Dasturchi kodni tekshirish, o‘zgaruvchilar qiymatini ko‘rish, funksiyalar qanday ishlashini kuzatish uchun ishlatiladi.
• Kodni yozishda xatoliklarni topish va tushunishni osonlashtiradi.

Xulosa:
• console.log() → kodni kuzatish va test qilish uchun vosita.
• U foydalanuvchiga emas, balki dasturchiga mo‘ljallangan.
• Frontend’da brauzer konsolida, backend’da esa Node.js terminalida natija ko‘rsatadi.



Extension: 
JavaScript (ES6) code snippets – editor da kodlarni avtomatik tamomlash uchun taklif beruvchi vosita(huddi Emmet abbreviation ga o’xshash)
__________________________________________________________________________
Javascript ni html sahifada foydalanish
Asosan 3 usulda foydalanamiz.

1)	body elementining yopilish tegidan oldin <script> elementini yozib, uning ichida javascript kodlarini yozish orqali.
2)	Inline
3)	External 
              1)body elementining yopilish tagi oldidan

              2)//!head elementida defer attributi orqali(!asosiy shuni ishlatamiz, bunda DOM to'liq yuklangandan keyin js kodlar ishlashni boshlaydi)
              sintaksis:
              <script defer src="javascript-1.js"></script>

              3)head elementida async attributi orqali(DOM manipulyatsiyasiga tegishli kod bo'lmasa, asosan reklamalar uchun ishlatiladi)

*/

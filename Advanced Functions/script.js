//forEach =>  میزنهloop فقط روی ارایه کار میکنه و حلقه میزنه

const numbers = [2, 4, 6, 8, 10];
const Newnumbers = [];

numbers.forEach((number) => {
  Newnumbers.push(number * 2);
})
console.log(Newnumbers);

// map => کردیم از فانکشن return  روی یک ارایه به ما ارایه جدید رو میدهد و مقدار جدید اون چیزی هست که ما  mapدر کل یک ارایه برای ما میسازه یعنی نتیجه 
/*
برای ایجاد یک آرایه جدید از تغییراتی که روی عناصر یک آرایه اعمال می‌کنیم.
همیشه آرایه‌ای جدید می‌سازد.
طول آرایه جدید برابر با آرایه اصلی است.
*/

const num1 = [1, 3, 5, 7];
const Newnum1 = num1.map((number1) => number1 * 4);
console.log(Newnum1);

// findIndex , find :

/*
find :
ولین عنصری که شرط خاصی را داشته باشد، پیدا می‌کند.
فقط اولین موردی که شرط را داشته باشد برمی‌گرداند.
اگر چیزی پیدا نشود، undefined برمی‌گرداند.
*/
// find => .(true-false) می دهد boolearn برای پیدا کردن یک ایتم در یک ارایه استفاده میکنیم و به ما  
const numbers1 = [1, 2, 3, 4];
const result = numbers1.find(number2 => number2 === 5);
console.log("result :", result);

const numbers3 = [5, 10, 15, 20];
const result1 = numbers3.find(num => num > 10);

console.log(result1);

// findIndex => اون آیتم را بخواهیمindex  بعضی اوقات لازم است که 
// 
/*
اما به جای مقدار،  ایندکس آن را بر میگرداندfind  شبیه به 
اگر چیزی پیدا نشود، -1 برمی‌گرداند.
*/

const number4 = [5, 10, 15, 20]
const result2 = number4.findIndex(num => num > 11)
console.log(result2) // => 15  , index = 2


//filter :

/*
یک آرایه جدید شامل عناصری می‌سازد که شرط خاصی را دارند. 
 
ممکن است آرایه جدید خالی باشد.
همیشه با آرایه اصلی کاری ندارد و تغییرش نمی‌دهد.

*/

const number5 = [2, 4, 5, 6, 7, 20, 26, 4]
const filterd = number5.filter(num => num > 10)
console.log(filterd);

// reduce :
/*
مقدار همه عناصر آرایه را به یک مقدار کاهش می دهد.

acc مخفف accumulator (جمع‌کننده) .
مقدار اولیه (0 در مثال زیر) باید مشخص شود.
*/

const numbers6 = [1, 2, 3, 4];
const sum = numbers6.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10


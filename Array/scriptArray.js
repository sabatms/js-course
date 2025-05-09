const firstArray = new Array(4, 5, 6);
console.log(firstArray);

const secondarray = ["saba", "tms", 26];
console.log(secondarray.length);
console.log(secondarray[1]);

//secondarray.push(23) => push :به اخر ارایه اضافه میکنه;
// secondarray.unshift(1) => unshift: به اول ارایه اضافه میکنه;
//secondarray.pop() => pop: میاد از آخر آرایه کم میکنه ;
//secondarray.shift() =>  shift: میاد از اول آرایه کم میکنه
console.log(secondarray);

const ThirdArray = secondarray.toString();
console.log(ThirdArray);
secondarray[0] = "ali";
// delete: میایم میگیم که اون ایندکسش رو بیا برام عوض کن
console.log(secondarray);

const FourthArray = secondarray.join(" and ");
console.log(FourthArray);

const FifthArray = ["milad", "azami", 27];
const SixthArray = FifthArray.concat(secondarray);
console.log(SixthArray);

const SeventhArray = [
  [1, 2, 3],
  [6, 7, 8, 9],
];
const EighthArray = SeventhArray.flat();
console.log(EighthArray);

console.log(secondarray.indexOf("tms"));
console.log(secondarray.includes(27));
// includes:  میاد میگرده ببینه وجود داره این آیتم یا نه (true/false)

//slice-splice

const NinthArray = ["milad", "azami", 26, 1, 2, 3, 4];
const Tenth = NinthArray.slice(2, 5);
console.log(Tenth);
const Tenth1 = NinthArray.slice(-5, -1);
console.log(Tenth1);
const Tenth2 = NinthArray.splice(1);
console.log(Tenth2);

// sort - reverse
// reverse : میاد ترتیب رو برای ما برعکس میکنه.

const EleventhArray = [3, 2, 6, 90, 4, 21, 22, 11];
EleventhArray.sort();
console.log(EleventhArray);
EleventhArray.reverse();
console.log(EleventhArray);

// stack memory Or heap memory
// stack memory :  سرعت بالا  - حافظه کم
// heap memory :( دیتای زیادی میتونه در خودش ذخیره کنه) سرعت کم - حافظه زیاد

// primitive type :
//  string / number/ boolean / null / undefiend / symbol

// refrence type :
// Array / Object / function

let x = 2;
let y = 3;
x = 5;
console.log("x =", x);
console.log("y =", y);

let w = [1, 2, 3];
let z = w;
w.push(5);
console.log("w =", w);
console.log("z =", z);

// مقایسه دیتاها با هم
console.log(5 == "5"); // true - مقایسه با تبدیل نوع
console.log(5 === "5"); // false - مقایسه بدون تبدیل نوع

console.log(null == undefined); // true
console.log(null === undefined); // false - در مقایسه سختگیرانه، این دو متفاوت هستند

console.log(5 != "5"); // false - (نابرابری)با تبدیل نوع
console.log(5 !== "5"); // true - (نابرابری)بدون تبدیل نوع

//Spread Operator : (عملگر گسترده)
let Numbers = [1, 2, 3];
let copiedNumbers = [...Numbers];
copiedNumbers.unshift(7);

console.log(Numbers);
console.log(copiedNumbers);

let first = [6, 7, 9];
let second = [10, 11, 12];
let combined = [...first, ...second];

console.log(combined);

// Aray Destructurring

const data = ["saba", "tms", "shiraz", 26, 1, 2, 3, 4];

const [name, lastname, city, age, ...other] = data;
console.log(name);
console.log(lastname);
console.log(city);
console.log(age);
console.log(other);
// challenge :

const fullStack = [
  ["HTML", "Css", "js", "React", "TypeScript"],
  ["Node", "express", "MonGoDB"],
];

const [frontend, backend] = fullStack;
console.log(frontend);
console.log(backend);

const [, css, , react] = frontend;
console.log(css, react);

const [,express ,] = backend;
console.log(express);
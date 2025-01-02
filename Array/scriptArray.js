const firstArray = new Array(4,5,6);
console.log(firstArray);

const secondarray = ["saba" ,"tms" , 26];
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

const FourthArray = secondarray.join(" and ")
console.log(FourthArray);

const FifthArray = ["milad" , "azami" , 27];
const SixthArray = FifthArray.concat(secondarray);
console.log(SixthArray);

const SeventhArray = [
    [1,2,3] ,
    [6,7,8,9], 
]
const EighthArray = SeventhArray.flat();
console.log(EighthArray);

console.log(secondarray.indexOf("tms"));
console.log(secondarray.includes(27));
// includes:  میاد میگرده ببینه وجود داره این آیتم یا نه (true/false)
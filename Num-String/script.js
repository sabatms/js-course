//Number Methods:
//String Methods:
//1. toString()- toFixed()
//2. Number- parseInt()- parseFloat()
//3. String => Backslash -> \   , lenght
//4. index => indexOf() & CharAt()
//5. includes / toLowerCase() / toUperCase()
//6. split() / replace() / concat() / trim()
//7. slice() / substring() / substar()
//8. challege  = Capitalize first letter of a text
//9. challege = Replace a part of phone Number
//10. Tempelate literals
//11. challege = Extract name and lastname


// const number = 40
// console.log(number)
// console.log(typeof number)

// const string = number.toString()
// console.log(string)
// console.log(typeof string)

// const number = 4.3565756
// console.log(number.toFixed(2))
// console.log(number.toFixed())

// const string = "22.4572534"
//const number = Number(string)
//const number = parseInt(string)
// const number = parseFloat(string)
// console.log(number)
// string => Number -> Number(string)/  string => عدد اعشاری در نظر نگیرد به عدد صحیح تبدیل بشود => parseInt(string) / string => parseFloat(string) -> عدد اعشار به ما میدهد

// const text = 'Hi I\'am saba .'
// console.log(text)
// const text1 = 'Hi i\' am student.\n Whats your job? '
// console.log(text1)
// console.log(text1.length)
// (\n) => میاد اون متن رو به خط بعد انتقال میدهد  /  length => میاد طول اون رشته را برای ما حساب میکنه

// const text1 = "saba tahmasebiNezhad Shirazi"
// console.log(text1[24])
// console.log(text1.indexOf("N"))
// console.log(text1.charAt(8))
// indexOf => شمارش چند هستindex میاد میبینه که اون حرفی که نوشتیم / charAt() => میاد میبینه اون شماره اییکه نوشتیم چه حروفی رو به ما نشان میدهد

// const text = "Fatemeh TahmasebiNezhad"
// console.log(text.includes("fatemeh"))
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// includes => بهم میده Boolean میاد  / toLowerCase() => میاد حروف به حروف کوچک تبدیل میکنه / toUperCase() =>میاد حروف رو به حروف بزرگ تبدیل بشه

// const text1 = "saba tahmasebi nezhad shzi"
// const text2 = "She is Best Developer Web-programing"
// console.log(text1.split(" "))
// console.log(text1.replace("saba" , "Sorena"))
// console.log(text1.concat(" ",text2))
// console.log(text1.trim())
// split() =>میاد بر اساس اون کاراکتری بهش گفتیم میاد از هم جدا میکنه  /  replace() =>  میایم مقدار آن را مینویسیم بعدش مقدار جدید را اضافه میکنیم string  اگر خواستیم اسم یا چیزی را عوض کنیم در
// concat() => اگر خواستیم دوتا متغیر را به هم وصل کنیم از این متد استفاده میکنیم / trim() => میاد فضاهای اول و اخر رو حذف میکنه



//const text = "Saba is the Best Front-end Developer in Iran"
//const newText = text.slice(7, 12)
//const newText = text.slice(-21,-15)
//const newText = text.substring(12)
// const newText = text.substr(10, 18)
// console.log(newText)
// slice => علاوه بر اعداد مثبت .اعداد منفی رو هم به کار میبریم.
//substring => هست با این تفاوت که عدد منفی در خود نمیتواند قرار بدهدslice مانند 
//substr => مثلا میگیم از 10 شروع کن و تا 18 بعدش رو بگیر



// const text = "hi, i'm saba and Developer front-end "
// const firstLetter = text.charAt(0)
// const textUpperCase = firstLetter.toUpperCase()
// const finalText = text.replace(firstLetter, textUpperCase)
// console.log(finalText);



// const phoneNumber = "00901543426778"
// const finalPhone = phoneNumber.replace(phoneNumber.slice(3,11) , "****");
// console.log(finalPhone)
//or
// const phoneNumber = "00901543426778"
// const substring = phoneNumber.slice(3,11)
// const signs = "****"
// const finalPhone = phoneNumber.replace(substring,signs)
// console.log(finalPhone)



// const name = "s"
// const age = "25"
// const lastName = "tms"
// const final = `my name is ${name} and my lastname is ${lastName} and i'm ${age} years old.`
// console.log(final)



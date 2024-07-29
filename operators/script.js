//operators :
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. logical Operators
//5. String Operators
//6. Unery Operators
//Ternery Operators
//checkout Order Details

//1. Arithmetic Operators = عملگرهای حسابی
// let x = 6
// let y = 3
// const result1 = x + y
// const result2 = x - y
// const result3 = x * y
// const result4 = x / y
// const result5 = x ** y
// const result6 = x % y

// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(result5)
// console.log(result6)

// let z = 3
// z++
// z--
// console.log(z)

//2. Assignment Operators
// let x = 5
// let y =2

// x += 2
// x -= 3
// x *=5
// x /= 2.5
// x **=2
// x %= y
// console.log(x)

//3. Comparison Operators
//(Boolean => true - false)
// let x = 5
// let y = 3
// let z = 5
// let w = "3"

// console.log(x == y)
// console.log(y == z)
// console.log(x == z)
// console.log( y == w )
// console.log(x != z)

// console.log( y === w)
// console.log( y !== w)

//4. Logical Operators(and . Or)
// (&& , || )
//( && => true-true = true/ true-false = false / false-false =false)
//( || => true- true = true / true-false = true / false- false = false )

// let x = 5
// let y = 3
// let z = "5"
// console.log( x > y && x==z)
// console.log( x > y  && y ==z)
// console.log( x < y  && y == z)
// console.log( x == y || x > y)
// console.log( x === z ||  y < x )
// console.log( x === y || z < y)

// // logical Not = (true -> false / false -> true)
// console.log(! y == z)

//5. String Operators
// let firstName = "ali"
// let lastName = "Dehghan"
// // let Text = firstName + lastName
// let Text = firstName += lastName
// console.log(Text)

//6. Unery Operators
// const value = "5";
// console.log(+value);
// let x = -8;
// console.log(-x);
// let value1 = 'aaa'
// console.log(-value1)

//Ternery Operators
// let x= 3
// let y = 2
// console.log(x > y ? "yes" : "No")


//checkout Order Details
 const prisce1 = 50;
 const prisce2 = 15;
 const prisce3 = 18;

 const balance = 60;

 const totalPrice = prisce1 + prisce2 + prisce3 * 2
 console.log("TotalPrice :" , totalPrice)
 const avaragePrice = totalPrice /4
 console.log("AvaragePrice :" , avaragePrice)
 const fainalPrice  = totalPrice * 0.95
 console.log("FinalPrice :" , fainalPrice)
 const CanBuy = balance >= fainalPrice;
 console.log("CanBuy:" , CanBuy)
 const massage = CanBuy ? "Great! you can buy these Products" : "Sorry!"
 console.log( massage)

//0 ve 1'i Anlamak ->
let isActive = false // 0 
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

//Boolean İçinde bilgi var mıdır yok mudur ona bakıyor. içinde yazdığının pek bir önemi yok gibi.


//0 ,-0 null, false, NaN, undefined, (""") ->

Boolean(0) // false
Boolean(-0) // false
Boolean (-0.1) //true 

let a;
Boolean(a)

// //Not: Karar yapıları kısmında tekrar anlatılacak.
// Boolean (userName.length > 0) //true



// Boolean({})             // true
// Boolean([])             // true
// Boolean(Symbol())       // true
// !!Symbol()              // true
// Boolean(function() {})  // true

console.log("number" + 15 + 3 )

console.log(15 + 3 + "number",)

console.log(22)


console.log(12 + "6")
console.log("yar" + + "bar")

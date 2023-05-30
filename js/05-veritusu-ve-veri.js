// Veri türünü öğrenmek ve Veri türü Dönüşümleri *******************************


// veri türünü öğrenmek typeof:

let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(

    "price ",
    typeof(price)
)

console.log(

    "stringPrice",
    typeof(stringPrice)

)

console.log(
    "hasPassword",
    typeof(hasPassword)
)


// typeof("11") === "string"  //bu şekilde yazarak içerideki verinin türünü öğrenebiliyorum.


// string(metinsel) bilgileri int ve float'a dönüştürmek

let number1 = "11"
number1 = parseInt(number1) //bu şekildede yapabilirim.
console.log("number1: ",number1, typeof(number1))

let number2 = "11px"
number2=parseInt(number2)
console.log("number2: ",number2,  typeof(number2))


let number3 = "11.4px"
number3=parseFloat(number3)
console.log("number3: ",number3,  typeof(number3))


//Number veri tipinden string'e dönüştürmek:

let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))







// String(123)  explicit
//123 + ''      implicit

// implicit riskli ama daha hızlı.


//primitif tipler: number, string, boolean, null, undefined + Symbol (ES6’da eklendi.)  


// !!"false" == !!"true"
// !! operatörü, boş olmayan string 'true' ve 'false' ifadelerini true boolean tipine dönüştürür. == operatörü herhangi bir coercion yapmadan saedece eşitlik durumunu kontrol eder.

 
// ******************* Karşılaştırma Operatörleri ve Mantıksal Operatörler.*************************
// https://www.w3schools.com/js/js_comparisons.asp


let price = "100"
let user = "umut"



// == Eşitse


console.log("==: ",  price == 1)
console.log("== :", price == 100)





// === Hem değeri hem de türü Eşitse.
console.log("===: ", price === 1 )
console.log("===: ", price === 100 )


// != Eşit Değilse
console.log(user != "guest")


//  < Küçükse.

console.log(price < 100)


// <= Küçük veya eşitse.
console.log(price <= 100)


// > Büyükse.
console.log(price > 100)


//  >= Büyük veya eşitse.
console.log(price >= 100)


//  && ve
price = 0
console.log (price > 0 && user !="guest")

// || veya
console.log (price > 0 || user !="guest")

// ! degil (tersi.)

user= "guest"
price= 1 


console.log (price > 0 && !user =="guest")

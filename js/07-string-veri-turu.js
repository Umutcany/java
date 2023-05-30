// ***************strıng veri türü islemleri ********************************
// https://www.w3schools.com/jsref/jsref_obj_string.asp


let email= "ylmazumutcan49@gmail.com"
let firstName ="umut"
let lastName ="yılmaz"




// string karakter sayisi -> length **önemli...
console.log(email.length)

// ilk karakteri bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))


// buyuk harf / kucuk harf :
firstName = firstName.toLocaleUpperCase()
console.log(firstName)

firstName = firstName.toLocaleLowerCase()
console.log(firstName)



// string icinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[14])

// **********-1 gelirse aradığım ifade yoktur.

// belli bir yere kadar al -> slice:
let DOMAIN = email.slice(email.search("@") + 1 )
console.log(DOMAIN)


console.log(

    DOMAIN.slice(0, DOMAIN.indexOf(".")) //sadece gmail kısmını aldık.
)




// bilgiyi degistir ->replace :

email = email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

// istedigim bilgi var mi? -> includes :

console.log(email.includes("dskdaskfak")) //false
console.log(email.includes("@")) //true



// istedigim bilgiyle basladi mi ? bitti mi -> starsWidth, endsWidth :

console.log(email.endsWith("kodluyoruz.org"))


// ilk harflerini büyük yapmak

let fullName =  `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}

`
console.log(fullName)




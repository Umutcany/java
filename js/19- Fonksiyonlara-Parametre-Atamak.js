// Fonksiyonlara Parametreler Atamak ve Fonksiyondan GeriDönüş Almak



// Temel Kurallar:
// 1: Bir Fonksiyon bir veya Birden Fazla parametre alabilir veya hiç almayabilir.
// 2: Bir Fonksiyon Dişari Bilgi Gönderebilir(return) veya Gondermeyebilir.
// 3: Mümkünse Fonksiyonun Bağımlılıklarını Azaltmak Gerekir


// Bir Fonksiyon dışarıya ne kadar az bağımlıysa o kadar iyidir ve kontrolde rahattır.


let firstName="Lorem"  //Dışarıya bağımlı kalmadan fonksiyonunun içine yaz

function greetings (firstName="") {

    // console.log(`Merhaba ${firstName ? firstName:"" }`) YÖNTEM 1 
    console.log (`Merhaba ${firstName}`)
} // Default Parametre Alıyor

function greetings2 (firstName="", lastName="" ) // Fonksiyonların içine yazdığım değerler parametre oldukları için çakışmıyorlar hiç bir türlü 
{

    let info = `Merhaba ${firstName} ${lastName}`
    return info 
}

let greetingsInfo = greetings2("Ad", "Soyad")
console.log(greetingsInfo)

function domIdWriteInfo (id, info) {

    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">COLOR REDDDD</span>`

domIdWriteInfo(`greeting`, htmlInfo)
domIdWriteInfo("info", greetings2("Lorem", "Ipsum"))

 

// İSİMLER AYNI BİLE OLSA FONKSİYONUN İÇİNDE NE TANIMLIYSA O GELİR DIŞARYI EZER GEÇER.
// Let yapısı blok içinde çalışır o yüzden fonksiyon içinde aynı ismi ve dışında aynı ismi kullanabilirim.



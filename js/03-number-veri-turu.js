// ------------------------ NUMBER -----------------------
// NUMBER VERİ TURU TANIMLAMAK:


let price = 100 
let tax = 0.18
let priceTax = price * tax 
let total = price + priceTax
console.log(

        "Fiyat:", price,
        "KDV ORANI:", tax,
        "KDV TUTARI:", priceTax,
        "Fiyat:", total


) 

let stringNumber = "11"
console.log("Sayı", stringNumber)

//arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter ++;


counter --;
counter -= 1;
console.log(counter)


counter *= 10 
console.log(counter)

counter /= 2 
console.log(counter)


//islem önceligi:

console.log(2 + 3 * 10) // 32  
console.log(2 + 3 + (5-8+3) * 10) // 5

// mod(kalan) alma %
//sayı tek mi cift mi ??
console.log(14 % 2) // 0 ise çift
console.log(17 % 2 )// 1 ise tek

// 8 ürün alan koliye tüm ürünler sığıyor mu?
console.log("Koli Örneği", 18 % 8)


//us alma (üzeri 2 üzeri 4 vs) **:


console.log(2 * 2 * 2 * 2)
console.log(2 ** 4 )
console.log(2 ** 5 )

 // asagi yuvarlama islemi -> Math.floor
 console.log("Aşağı Yuvarlama: ", Math.floor(1.9))

 //yukarı yuvarlama islemi -> Math.ceil
 console.log("Yukarı Yuvarlama: ", Math.ceil(1.3) )

 //yakina yuvarlama islemi -> Math.round
 console.log("Yakina Yuvarlama: ", Math.round(1.5))














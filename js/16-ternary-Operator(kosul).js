

let userName = prompt("Kullanıcı Bilginizi Yaziniz")
let info = document.querySelector("#info")



// ternary kullanımı:
// koşul ? doğruysa : yanlışsa 


// Ben aşağıda Ternary operatörü ve template literalsı birlikte kullnarak iki işi birlikte çözdüm işimi fazlaca kolaylaştırdım. aynı zamanda switch kullanmını da öğrendim
// bugün bayağı bir şey öğrendik.

info.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi :) "}`
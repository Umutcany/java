// ************ ÇOKLU KOŞULLARLA ÇALIŞMAK ***********************











let userName = prompt("Kullanici Adinizi Giriniz:")
let age = prompt("Lütfen Yaşınızı Giriniz: ")
let info =document.querySelector("#info")

if (userName && age >= 18) {

    info.innerHTML = "Ehliyet Alabilirsiniz."
}

else if (!userName) {

    info.innerHTML = "Kullanıcı Adınız Yok."
}
else if (!(age >= 18)) {

    info.innerHTML ="Yaşınızı Girmediniz veya 18 yaşından küçüksünüz."

}




// ! Yoksa,Değilse anlamına gelir. 
 
// Switch komutlarınında örneğini koydum 4 ve 5'te onlar da if komutlarının temiz geçirilmiş hali gibi düşünebilirsin.  
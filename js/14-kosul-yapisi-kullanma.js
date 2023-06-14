// ************************Koşullarla Çalışmak*****************************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else



let username = prompt("Kullanıcı Adını Giriniz: ")


// eger kullanıcı bilgisi varsa ekrana ismi yazdır.
// eger (username.length>0) {console.log(username)}  degilse {console.log("bilgi yok")}
// if (username.length > 0 ) {console.log(username)}  else  {console.log("bilgi yok")}

if (username.length > 0 ) {          // if kısmı her zaman true ile çalışır.

    console.log(`Kullanıcı Bilginiz ${username}`)
}
   else {                                    
    {console.log("bilgi yok")}

}




// if (içine koşullar yazılır.) {içine istediğimin bilgeri yazarım.}
// else komutunu çok kullanmamaya çalışalım çünkü genel olarak her şeyi kapsıyor problem yapmaya çok elverişli.




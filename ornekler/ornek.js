var ogrVizeNot = 5; // Bu kod satırını değiştiriniz. 
var ogrFinalNot = 12; // Bu kod satırını değiştiriniz. 

var ogrVizeNot=prompt("Vize Notunu Giriniz: ");
var ogrFinalNot =prompt("Final Notunuzu Giriniz: ")

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);






var ogrOrtalama = (ogrVizeNot*0.3) + (ogrFinalNot*0.7);

if(ogrOrtalama >=0 && ogrOrtalama <30) {

    console.log(`
        Not Ortalamnız: ${ogrOrtalama} FF Kaldınız.
    
    `)
}

else if (ogrOrtalama >=31 && ogrOrtalama <49) {
    console.log(`Not Ortalamanız: ${ogrOrtalama} DC ile koşullu geçtiniz.` )
    
}

else if (ogrOrtalama >=50 && ogrOrtalama <84) {
    console.log(`Not Ortalamanız: ${ogrOrtalama} CC İle Geçtiniz!`)
}

else if (ogrOrtalama >=85 && ogrOrtalama<=100) {
    console.log(`Not Ortalamanız ${ogrOrtalama} AA İle Geçtiniz.`)

}


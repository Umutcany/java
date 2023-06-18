//  Local storage işlemleri

// Kompleks Yapı Kullanıyorsak JSON'ı kullanmak lazım yoksa object object diye kaydediyor.



let user= {Username:"Umut Can Yılmaz", isActive: true}

localStorage.setItem("userInfo", JSON.stringify(user));


let userInfo= localStorage.getItem("userInfo") //Bilgiyi Al
userInfo= JSON.parse(userInfo)
console.log(userInfo)
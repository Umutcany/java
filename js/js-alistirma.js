//Function Bolum the Egzersiz

let counter= localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0

let counterDom = document.querySelector("#counter")
let increaseDom = document.querySelector("#increase")
let decreaseDom = document.querySelector("#decrease")
let resetDom = document.querySelector("#reset")
let welcome = document.querySelector("#username")




increaseDom.addEventListener("click", clickEvent)
decreaseDom.addEventListener("click", clickEvent)
resetDom.addEventListener("click",clickEvent)


//değişkenlerimize bir 'click' olayı ekleyelim.(addEventListener bir olay eklememizi sağlar)

function clickEvent() {

    console.log(this.id)

    this.id === "increase" ? counter += 1 : (this.id === "decrease" ? counter -= 1 : counter = 0);

    localStorage.setItem("counter",counter)
    counterDom.innerHTML = counter

}


let username = prompt("Merhaba, İsminizi Giriniz: ");

if (username === null || username.trim() === "") {
  alert("Kullanıcı adı girmeniz gerekmektedir!");
} else {
    welcome.innerHTML = `Hoşgeldiniz ${username} bey`
}




function showTime() {

    let tarih= new Date()

    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]


    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `
    
    ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}: - ${days[tarih.getDay()]} 


    `
}

setInterval(showTime,1000)


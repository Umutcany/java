// Fonksiyonlar Bölüm sonu egzersizi


let counter=0
let counterDom = document.querySelector("#counter")
let increaseDom = document.querySelector("#increase")
let decreaseDom = document.querySelector("#decrease")


counterDom.innerHTML = counter

increaseDom.addEventListener("click",clickEvent)
decreaseDom.addEventListener("click",clickEvent)


function clickEvent() {

    console.log(this.id)



    this.id == "increase" ? counter += 1 : counter -=1
    counterDom.innerHTML= counter



    // this.id =="increase" ? counterDom.innerHTML= counter +=1 : counterDom.innerHTML= counter -=1  ******************************buda bir yöntemdir.







    // if (this.id=="increase") {
    //     counterDom.innerHTML = counter += 1
    // } else {

    //     counterDom.innerHTML = counter -= 1

    // }  ***************************yöntemlerden birisi bu.

}
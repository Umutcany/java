// Liste icerisindeki son elemana ulaşmak veya eleman eklemek *************************

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son ogeyi degistirdim."


let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk ogeyi degistirdim."


let ulDom = document.querySelector("ul#list")
let liDom = document.createElement("li")

liDom.innerHTML ="Kendi olusturdugum oge"

ulDom.append(liDom)   //En sona Ekler.
// ulDom.prepend(liDom)  //En Başa ekler.









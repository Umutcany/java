// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


let fullName = prompt("Lutfen adinizi Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `

${greeting.innerHTML} <small style="color:red">${fullName}</small>


`

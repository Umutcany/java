

let greeting = document.querySelector("#greeting")


greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //birden fazla class eklemek.



greeting.classList.remove("new-info", "second-class")  //listeleri bu şekilde silebilirim.

greeting.classList.add("ananın")


console.log(greeting.classList)



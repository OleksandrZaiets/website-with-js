//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості параметру

const myTitle = document.querySelector("title")
myTitle.textContent = "Hello, homy!"

const intro = document.querySelector("th")
intro.textContent = "Welcome to my party, homies! I'm glad to see my team!"

const image = document.querySelector("img.Gif-animation")
console.log(image.clientWidth)

const table = document.querySelector("td.mainTable__content")
console.log(table.clientWidth)
table.width = 500
console.log(table.clientWidth)


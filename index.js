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
const table = document.querySelectorAll("td.class-mainTable__content")


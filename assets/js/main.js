// 1
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     elem.setAttribute("class", 'www')
// }

// 2
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     elem.removeAttribute("class");
// }

// 3
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     if(elem.classList.contains('www')){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }

// 4
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     if(elem.classList.contains('www')){
//         console.log("Yes");
//     }else{
//         elem.classList.add("www");
//     }
// }

// 5
// function func(){
//     let elem = document.getElementById("h1");
//     console.log(elem.classList.length);
// }

// 6
// function func(){
//     let elem = document.getElementById("h1");
//     for (const el_class of elem.classList) {
//         alert(el_class)
//     }
// }

// 7
// let text = document.getElementById("h1");
// alert(text)
// text.style.cssText = 'color: red; font-size: 30px; border: 2px solid black';





// TagName 
// 1
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     alert(elem.tagName)
// }

// 2
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     alert(elem.tagName.toLowerCase())
// }

// 3
// function func(){
//     let elem = document.getElementsByTagName("h1")[0];
//     elem.setAttribute("class", 'www' + elem.tagName.toLocaleLowerCase())
// }
// function func2(){
//     let elem2 = document.getElementsByTagName("h2")[0];
//     elem2.setAttribute("class", 'www' + elem2.tagName.toLocaleLowerCase())
// }
// function func3(){
//     let elem3= document.getElementsByTagName("h3")[0];
//     elem3.setAttribute("class", 'www' + elem3.tagName.toLocaleLowerCase())
// }




// appendChild
// 1
// let ol = document.querySelector('ol');
// let li = document.createElement('li');
// li.innerHTML = 'пункт';   
// ol.appendChild(li);

// 2
// let element = document.querySelector('ul.list');
// for (let counter = 0; counter <= 3; counter++){
//     let li = document.createElement('li');
//     li.innerHTML = counter;
//     element.appendChild(li);
// }

// insertAdjacentHTML
// 1
// let title = document.querySelector(".elem");
// title.insertAdjacentHTML("beforeBegin", "<span>!!!</span>");

// 2
// let title = document.querySelector(".elem");
// title.insertAdjacentHTML("afterend", "<span>!!!</span>");

// 3
// let title = document.querySelector('.elem');
// title.insertAdjacentHTML('afterbegin', "<span>!!!</span>");

// 4
// let title = document.querySelector('.elem');
// title.insertAdjacentHTML('beforeend', "<span>!!!</span>");





// removeChild
// 1
// function func(){
//     let parent = document.querySelector('.parent');
//     let elem = document.querySelector('.child');
//     parent.removeChild(elem);
// }

// 2
// function func(){
//     let parent = document.getElementById("list");
//     parent.removeChild(parent.lastElementChild);
// }

// 3
// function func(){
//     title = document.getElementById("title");
//     title.remove()
// }

// 5
// function func(){
//     block = document.getElementById("block");
//     inp = document.getElementById("inp");
//     block.appendChild(inp.cloneNode(true));
// }




// Потомки
// 1
// let parent = document.getElementById("parent");
// parent.firstElementChild.style.color = "red";

// 2
// let parent = document.getElementById("parent");
// parent.lastElementChild.style.color = "red";

// 3
// let block = document.getElementById("elem");
// let elems = block.children;
// for (let elem of elems) {
//     elem.insertAdjacentHTML("beforeend", "!!!");
// }




// Соседи   
// 1
// let elem = document.getElementById("elem");
// let jelem = elem.previousElementSibling.innerHTML += "!!!";

// 2
// let elem = document.getElementById("elem");
// let jelem = elem.nextElementSibling.innerHTML += "!!!";

// 3
// let elem = document.getElementById("elem");
// let jelem = elem.nextElementSibling
// let kelem = elem.nextElementSibling.innerHTML += "!!!";

// Родители
// 1
// let parent = document.getElementById("elem2");
// let jelem = parent.parentElement.style.background = "red";

// 2
// let parent = document.getElementById("elem3");
// let parent2 = parent.parentElement;
// jelem = parent2.parentElement.style.background = "red";





// На величину границы
// 1
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.clientTop);
// }

// 2
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.clientLeft);
// }




//  На полный размер элемента
// 1
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.offsetWidth);
// }

// 2
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.offsetHeight);
// }






// На размер элемента без границ, но с padding
// 1
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.clientWidth);
// }

// 2
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.clientHeight);
// }





// getComputedStyle
// 1
// function func(){
//     let elem = document.getElementById("elem");
//     let style = getComputedStyle(elem);
//     alert(style.width);
//     alert(style.height);
// }




// Прокрутка элемента
// 1
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.scrollTop);
// }

// 2
// function func(){
//     let elem = document.getElementById("elem");
//     alert(elem.scrollLeft);
// }

// 3
// function func(){
//     let elem = document.getElementById("elem");
// 	elem.scrollTop = 100;
// }

// 4
// function func(){
//     let elem = document.getElementById("elem");
//     elem.scrollTop += 100;
// }





// Прокрутка элемента 
// 1
// function func(){
//     let elem = document.getElementById('elem');
//     alert(elem.scrollHeight);
// }

// 2
// function func(){
//     let elem = document.getElementById('elem');
//     alert(elem.scrollWidth);
// }

// 3
// function func(){
//     let height = document.getElementById('elem');
//     let height2 = height - 100;
//     elem.scrollTop = height2;
// }





// Прокрутка страницы
// 1
// function func(){
//     let hght = document.getElementById('elem');
//     console.log(window.pageYOffset);
// }

// 2
// function func(){
//     let hght = document.getElementById('elem');
//     console.log(window.pageXOffset);
// }





// Прокрутка страницы
// 1
// function func(){
//     let elem = document.getElementById('elem');
//     elem.scrollTo(300, 500)
// }

// 2
// function func(){
//     let elem = document.getElementById('elem');
//     elem.scrollBy(0, 300);
// }






// Practice
// 1
// function func(){
//     window.scrollTo(0, document.body.clientHeight);
// }

// 2
// function func(){
//     window.scrollBy(0, 400);
// }

// 3
// function func(){
//     let body = document.documentElement;
//     if (body.clientHeight == body.scrollHeight - body.scrollTop){
// 		window.scrollTo(0, 100);
// 	}
// }

// 4    
// let elem = document.getElementById('jelem');
// function func(){
// 	let width = elem.offsetWidth;
// 	let height = elem.offsetHeight;
// 	elem.style.width = width * 2 + 'px';
// 	elem.style.height = height * 2 + 'px';
// }
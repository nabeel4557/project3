let x = document.querySelectorAll("section#speaker div.container div.item");
console.log(x)
for(i = 0;i < x.length;i++) {
    x[i].addEventListener("click",function(){
        for(j=0;j<x.length;j++){
            x[j].style.background="white";
        }
        this.style.background="black";
    })
}
let y = document.querySelectorAll("section#speaker div.container div.item div.bottom p")
console.log(y)
for(i = 0;i < x.length;i++) {
    x[i].addEventListener("click",function(){
        for(j=0;j<x.length;j++){
            x[j].style.color="black";
        }
        this.style.color="white";
    })
}

// let activate = document.querySelectorAll(".item")
// activate.forEach(function (item) {
//     item.addEventListener("click",function(){
    
//     let hide = document.querySelector("ul.hide")
//     hide.style.display="block"

// })

// })


let head = document.querySelectorAll(".item")
head.forEach(function (items){
    items.addEventListener("click",function(){
        head.forEach(function (item){
            item.classList.remove("active")

        });

        items.classList.add("active");

        let clickedItem = items.getAttribute("data-id");
        console.log(clickedItem)

        let tabitems = document.querySelectorAll("ul.hide")
        tabitems.forEach(function (tabitem){
            tabitem.classList.remove("active");

        });
        document.getElementById(clickedItem).classList.add("active");

    })
})













// $(document).ready(function(){
//     $('div.up').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true

//       });
//     })
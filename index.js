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
    });
});

// footer end'''







/////////////////////////////////
// SLIDER 
/////////////////////////////////
const slideIndex = {};

function initializeSlides(containerId) {
    slideIndex[containerId] = 1;
    showSlides(slideIndex[containerId], containerId);
}

// Next/previous controls for a specific container
function plusSlides(n, containerId) {
    showSlides((slideIndex[containerId] += n), containerId);
}

// Function to show slides for a specific container
function showSlides(n, containerId) {
    let i;
    let slides = document.querySelectorAll(`#${containerId} .mySlides`);

    // If the index goes beyond the last slide, reset to the first slide
    if (n > slides.length) {
        slideIndex[containerId] = 1;
    }

    // If the index goes below the first slide, set to the last slide
    if (n < 1) {
        slideIndex[containerId] = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex[containerId] - 1].style.display = "block";
}

// Initialize slides for each container
initializeSlides("slider1");
initializeSlides("slider2");
initializeSlides("slider3");
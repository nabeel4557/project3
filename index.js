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
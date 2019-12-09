var box2 = document.getElementsByClassName("scroll-box")[0];
var ul2 = box2.getElementsByTagName("ul")[0];
var lis2 = ul2.getElementsByTagName("li");
var speed = 1;

ul2.innerHTML += ul2.innerHTML;
ul2.style.height = lis2.length * lis2[0].offsetHeight + 'px';
let height =  lis2.length * lis2[0].offsetHeight;

function move2() {
    //这里需要对ul.style.top 进行处理 
    if (-ul2.offsetTop >= height-228) {
        ul2.style.top = '0';
    }
    if (ul2.offsetTop > 1) {
        ul2.style.top = -(height-228)+"px";
    }

    ul2.style.top = -(-ul2.offsetTop + speed) + 'px';
}

let timer2 = setInterval(move2, 50);

box2.onmouseover = function() {
    clearInterval(timer2);
}

box2.onmouseout = function() {
    timer2 = setInterval(move2, 50);
}
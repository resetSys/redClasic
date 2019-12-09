var box = document.getElementById("scroll");
var ul = box.getElementsByTagName("ul")[0];
var lis = ul.getElementsByTagName("li");
var speed = 2;

ul.innerHTML += ul.innerHTML;
ul.style.width = lis.length * lis[0].offsetWidth + 'px';

function move() {
    //这里需要对ul.style.left 进行处理 
    if (ul.offsetLeft < -ul.offsetWidth / 2) {
        ul.style.left = '0';
    }
    if (ul.offsetLeft >= 0) {
        ul.style.left = -ul.offsetWidth / 2 + 'px';
    }

    ul.style.left = ul.offsetLeft + speed + 'px';
}

let timer = setInterval(move, 30);

box.onmouseover = function() {
    console.log('mouserover');
    clearInterval(timer);
}

box.onmouseout = function() {
    timer = setInterval(move, 30);
}
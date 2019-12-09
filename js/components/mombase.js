//使用jquery animate动画实现模块上移
//获取img标签
let mengItems = document.querySelectorAll(".meng-item");
//获取蒙层div
let mengFloors = document.querySelectorAll(".meng-floor");

//给这些div循环绑定onmouseover事件，鼠标进入，动画开始
for(let i = 0;i < mengItems.length;i++){
    mengItems[i].onmouseover = function(){
        $(mengFloors[i]).stop();
        $(mengFloors[i]).animate({
            marginTop:"-30px",
        },200,"linear");
    };
    mengItems[i].onmouseleave = function(){
        $(mengFloors[i]).stop();
        $(mengFloors[i]).animate({
            marginTop:"0",
        },200,"linear");
    }
}
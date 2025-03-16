const imgs=document.querySelectorAll('.container>img');
let angle=0
imgs.forEach((item)=>{
    item.style.transform='translate(-50% , -50%) rotate('+angle+'deg)';
    angle=angle - 7;
})

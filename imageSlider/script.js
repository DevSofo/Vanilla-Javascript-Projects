const nextEl=document.querySelector(".next");
const imageContainerEl=document.querySelector(".image-container");
const imgsEl=document.querySelectorAll("img");

const prevEl=document.querySelector(".prev");

let currentImg=1;
let timeout;

nextEl.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout);
    updateimg();
});

prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateimg();
});

function updateimg(){
    if(currentImg>imgsEl.length){
        currentImg=1;
    }else if(currentImg<1){
        currentImg=imgsEl.length;
    }
    imageContainerEl.style.transform=`translateX(-${(currentImg-1)*500}px)`;

    timeout=setTimeout(()=>{
        currentImg++;
        updateimg();
    },3000);
};
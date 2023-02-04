let imgs = document.querySelectorAll("img");

let imgs_up_arrow_arr = [];
let imgs_down_arrow_arr = [];

imgs.forEach((ele)=>{
    if (ele.getAttribute("src") == "./images/icon-up.svg"){
        imgs_up_arrow_arr.push(ele)
    }
    if (ele.getAttribute("src") == "./images/icon-down.svg"){
        imgs_down_arrow_arr.push(ele)
    }
})

imgs_up_arrow_arr.forEach((ele)=>{
    ele.parentElement.style.color = "hsl(163, 72%, 41%)";
})

imgs_down_arrow_arr.forEach((ele)=>{
    ele.parentElement.style.color = "hsl(356, 69%, 56%)";
})

let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})

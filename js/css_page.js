const xEltolasInput = document.getElementById("x_eltolas");
const yEltolasInput = document.getElementById("y_eltolas");
const rotateInput = document.getElementById("rotate");
const scaleInput = document.getElementById("scale");
const skewInput = document.getElementById("skew");
const clearTransformationsBtn = document.getElementById("clr_transform_btn");
const box = document.getElementById("box");

let xEltolasValue = 0;
let yEltolasValue = 0;
let rotateValue = 0;
let scaleValue = 1;
let skewValue = 0;

xEltolasInput.addEventListener("input", ()=>{
    xEltolasValue = xEltolasInput.value;
    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);
});

yEltolasInput.addEventListener("input", ()=>{
    yEltolasValue = yEltolasInput.value;
    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);
});

rotateInput.addEventListener("input", ()=>{
    rotateValue = rotateInput.value;
    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);
});

scaleInput.addEventListener("input", ()=>{
    scaleValue = scaleInput.value;
    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);
});

skewInput.addEventListener("input", ()=>{
    skewValue = skewInput.value;
    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);
});

clearTransformationsBtn.addEventListener("click", ()=>{
    xEltolasValue = 0;
    yEltolasValue = 0;
    rotateValue = 0;
    scaleValue = 1;
    skewValue = 0;

    transformation(xEltolasValue, yEltolasValue, rotateValue, scaleValue, skewValue);

    xEltolasInput.value = "";
    yEltolasInput.value = "";
    rotateInput.value = "";
    scaleInput.value = "1";
    skewInput.value = "";
});

function transformation(x, y, rotate, scale, skew){
    box.style.transform = 
    `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale}) skew(${skew}deg)`;
}
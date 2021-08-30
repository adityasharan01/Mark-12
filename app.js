//------------------- Calculate Area--------------------//
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn1 = document.querySelector("#btn-1");
const output1 = document.querySelector("#output-1");

btn1.addEventListener('click', calcArea);

function calcArea() {
    var b = base.value;
    var h = height.value;
    if(b <= 0 || h <= 0){
    output1.innerHTML ="Values should be greater than zero!";
return;
    }
    var area = 0.5*b*h;
    output1.innerHTML =area;
}


//------------------- Calculate Hypo--------------------//
const base1 = document.querySelector("#ab");
const height1 = document.querySelector("#bc");
const btn2 = document.querySelector("#btn-2");
const output2 = document.querySelector("#output-2");

btn2.addEventListener('click', calcHypo);

function calcHypo() {
    
    var b1 = base1.value;
    var h1 = height1.value;
    if(b1 <= 0 || h1 <= 0){
    output2.innerHTML ="Values should be greater than zero!";
return;
    }
    
    var hypo = Math.sqrt((b1*b1) + (h1*h1));
    output2.innerHTML =hypo.toFixed(0);
}


//------------------- Check Angles--------------------//
const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const btn3 = document.querySelector("#btn-3");
const output3 = document.querySelector("#output-3");

btn3.addEventListener('click', checkAngle);

function checkAngle() {
    var a =Number(angle1.value);
    var b = Number(angle2.value);
    var c = Number(angle3.value);
    if(a <= 0 || b <= 0 || c <= 0){
        output3.innerHTML = "Values should be greater than zero!";
            return;
    }
    console.log(typeof (a+b+c));
    if(Number(a)+Number(b)+Number(c) === 180){
        output3.innerHTML = "It forms a triangle!"
    }else{
        output3.innerHTML = "It doesnot forms a triangle!"

    }
}

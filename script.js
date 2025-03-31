
console.log("QrGenerator");

let imgbox= document.getElementById("imgbox")
let imgqr= document.getElementById("imgqr")

let btn = document.getElementById("btn")
let inputqr = document.getElementById("inputqr")

function generateQR (){
    if(inputqr.value.length>0){
    imgqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputqr.value
}
else{
    alert("please enter text or URL")
}}

document.getElementById("btn").addEventListener("click",()=>{
    generateQR()
})
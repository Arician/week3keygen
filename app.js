let pressKey=document.getElementById("buttonKey")
let pressCode=document.getElementById("buttonCode")
let pressWhich=document.getElementById("buttonWhich")
let pressKeyBig=document.getElementById("buttonKeyBig")
let page1=document.getElementById("page1")
let page2=document.getElementById("page2")
let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let p3=document.getElementById("p3")
let p4=document.getElementById("p4")

document.addEventListener("keydown",(e)=>{
    page1.style.display="none"
    page2.style.display="block"
    pressKeyBig.textContent=`${e.key}`
    pressKey.textContent=`${e.key}`
    pressCode.textContent=`${e.code}`
    pressWhich.textContent=`${e.which}`
    console.log(e.key,e.code,e.which)
    p4.textContent=p3.textContent
    p3.textContent=p2.textContent
    p2.textContent=p1.textContent
    p1.textContent=`${e.key}`
})
let javascript = document.getElementById("JS");
let css = document.getElementById("CSS");
let latest = document.getElementById("Latest");
let html = document.getElementById("HTML");
let design = document.getElementById("DSGN");


javascript.addEventListener('mouseover', func);
javascript.addEventListener('mouseleave', nextfunc);
function func() {
   
   
    javascript.style.color = "purple";
}
function nextfunc() {
    javascript.style.color = "white";
}
var label=document.getElementById("textbox");
var buton=document.getElementById("button");
var yeni=document.getElementById("yeni");
var eski=document.getElementById("eski");
var container=document.getElementById("container");
var container2=document.getElementById("container2");
let ad;
buton.addEventListener('click',function(){
    ad=label.value;
    container.style.display="none";
    yeni.style="display";
    container2.classList.add("yenisayfa");
    var d=new Date();
     yeni.innerHTML=`
    <p>HOSGELDİN ${ad}<p/>
    <p>TARİH VE SAAT: ${d}<p/>
    
    `;

    
});





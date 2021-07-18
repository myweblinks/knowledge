// Declare Variables
let QuickBTNP = document.getElementById("QuickBTNP");
let Dot1 = document.getElementById("Dot1");
let Dot2 = document.getElementById("Dot2");
let Dot3 = document.getElementById("Dot3");
let QuickLinkWin = document.getElementById("QuickLinkWin");

//Click Event of QuickBTNP
QuickBTNP.addEventListener("click", ()=>{
    if (Dot2.style.display!="none") {
        Dot2.style.display="none";
        Dot3.className="DotsAniUp";
        Dot1.className="DotsAniUp1";
        QuickLinkWin.style.display="flex";
        
    } else {
        Dot3.className="DotsAniUpRev";
        Dot1.className="DotsAniUp1Rev";
        QuickLinkWin.style.display="none";
        setTimeout(()=>{
            Dot2.style.display="flex";},250)
        }
})

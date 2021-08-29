//All Varibales Section 
let LInBTN1 = document.getElementById("LInBTN1");
let LInBTN2 = document.getElementById("LInBTN2");
let ToSlideOpn = document.getElementById("ToSlideOpn");
let SideBar = document.getElementById("SideBar");
let FiveHomeIcon1 = document.getElementById("FiveHomeIcon1");
let FiveHomeIcon2 = document.getElementById("FiveHomeIcon2");
let FiveHomeIcon3 = document.getElementById("FiveHomeIcon3");
let FiveHomeIcon4 = document.getElementById("FiveHomeIcon4");
let FiveHomeIcon5 = document.getElementById("FiveHomeIcon5");
let DownloadsShoItems = document.getElementById("DownloadsShoItems");
let DownloadsShower = document.getElementById("DownloadsShower");
let InstagramServices = document.getElementById("InstagramServices");
let InstgramServ = document.getElementById("InstgramServ");
let SearchDIn = document.getElementById("SearchDIn");
let SearchSggt = document.getElementById("SearchSggt");
let Help = document.getElementById("Help");
let GiveMouseDetl = document.getElementById("GiveMouseDetl");
let body = document.body;

//Array for hide Elements
let HideFiveHome = [FiveHomeIcon1, FiveHomeIcon2, FiveHomeIcon3, FiveHomeIcon4, FiveHomeIcon5];

//Click Event in ToSlideOpn
ToSlideOpn.addEventListener("click", () => {
    if (LInBTN1.className != "UpLNAni") {
        LInBTN1.className = "UpLNAni";
        LInBTN2.className = "DoLNAni";
        SideBar.style.left = "0";
        body.style.overflow="hidden"
        for (let i = 0; i < HideFiveHome.length; i++) {
            HideFiveHome[i].style.display = "none";
            
        }
        
    } else {
        body.style.overflowY="scroll"
        LInBTN1.className = "UpLNAniRev";
        SideBar.style.left = "-14.5rem";
        LInBTN2.className = "DoLNAniRev";
        FiveHomeIcon1.style.display = "flex";
        for (let i = 0; i < HideFiveHome.length; i++) {
            HideFiveHome[i].style.display = "flex";

        }
    }
})
//Download Show/Hide Toggle Items

DownloadsShoItems.addEventListener("click", () => {
    if (DownloadsShower.style.height != "12rem") {
        DownloadsShower.style.height = "12rem";
    } else {
        DownloadsShower.style.height = "3rem";
    }
})

// Instagram Services Toggle
InstagramServices.addEventListener("click", () => {
    if (InstgramServ.style.height != "9rem") {
        InstgramServ.style.height = "9rem";
    } else {
        InstgramServ.style.height = "3rem";
    }
})

SearchDIn.addEventListener("focusin",()=>{
    SearchSggt.style.display="flex"
    
})
SearchDIn.addEventListener("focusout",()=>{
    SearchSggt.style.display="none"
})

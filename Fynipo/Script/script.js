//All Varibales Section 


//Array for hide Elements
let HideFiveHome = [FiveHomeIcon1, FiveHomeIcon2];

//Click Event in ToSlideOpn
ToSlideOpn.addEventListener("click", () => {
    if (LInBTN1.className != "UpLNAni") {
        LInBTN1.className = "UpLNAni";
        LInBTN2.className = "DoLNAni";
        SideBar.style.left = "0";
        body.style.overflow = "hidden"
        for (let i = 0; i < HideFiveHome.length; i++) {
            HideFiveHome[i].style.display = "none";

        }

    } else {
        body.style.overflowY = "scroll"
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

SearchDIn.addEventListener("focusin", () => {
    SearchSggt.style.display = "flex"

})
SearchDIn.addEventListener("focusout", () => {
    SearchSggt.style.display = "none"
})

//To Show Search Bar Event Section 
SearchSubBTN2.addEventListener("click", () => {

    if (SearchSubBTN.style.display != "flex") {
        SearchSubBTN.style.display = "flex"
        SearchDIn.style.display = "flex"
    } else {

        SearchSubBTN.style.display = "none"
        SearchDIn.style.display = "none"
    }
})

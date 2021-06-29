// All Varible For Including DOM Elements.
//Download Now Items Variables. 
let DownloadItemsImg1 = document.getElementById("DownloadItemsImg1");
let DownloadItemsImg2 = document.getElementById("DownloadItemsImg2");
let DownloadItemsImg3 = document.getElementById("DownloadItemsImg3");
let DownloadItemsImg4 = document.getElementById("DownloadItemsImg4");
let DownloadItemsImg5 = document.getElementById("DownloadItemsImg5");
let DownloadItemsImg6 = document.getElementById("DownloadItemsImg6");
let DownloadItemsImg7 = document.getElementById("DownloadItemsImg7");
let DownloadItemsImg8 = document.getElementById("DownloadItemsImg8");
let DownloadItemsImg9 = document.getElementById("DownloadItemsImg9");
let DownloadItemsImg10 = document.getElementById("DownloadItemsImg10");
let DownloadItemsImg11 = document.getElementById("DownloadItemsImg11");
let DownloadItemsImg12 = document.getElementById("DownloadItemsImg12");
//Video Thumbnail Variables
let VideoThumbnail1 = document.getElementById("VideoThumbnail1");
let VideoThumbnail2 = document.getElementById("VideoThumbnail2");
let VideoThumbnail3 = document.getElementById("VideoThumbnail3");
let VideoThumbnail4 = document.getElementById("VideoThumbnail4");
let VideoThumbnail5 = document.getElementById("VideoThumbnail5");
let VideoThumbnail6 = document.getElementById("VideoThumbnail6");
//Variable Of Video Title Text
let VideoTitle1 = document.getElementById("VideoTitle1");
let VideoTitle2 = document.getElementById("VideoTitle2");
let VideoTitle3 = document.getElementById("VideoTitle3");
let VideoTitle4 = document.getElementById("VideoTitle4");
let VideoTitle5 = document.getElementById("VideoTitle5");
let VideoTitle6 = document.getElementById("VideoTitle6");
//Varibales Of Download Now Items Text.
let DownloadItemsName1 = document.getElementById("DownloadItemsName1");
let DownloadItemsName2 = document.getElementById("DownloadItemsName2");
let DownloadItemsName3 = document.getElementById("DownloadItemsName3");
let DownloadItemsName4 = document.getElementById("DownloadItemsName4");
let DownloadItemsName5 = document.getElementById("DownloadItemsName5");
let DownloadItemsName6 = document.getElementById("DownloadItemsName6");
let DownloadItemsName7 = document.getElementById("DownloadItemsName7");
let DownloadItemsName8 = document.getElementById("DownloadItemsName8");
let DownloadItemsName9 = document.getElementById("DownloadItemsName9");
let DownloadItemsName10 = document.getElementById("DownloadItemsName10");
let DownloadItemsName11 = document.getElementById("DownloadItemsName11");
let DownloadItemsName12 = document.getElementById("DownloadItemsName12");

//Array for Download Items Images
let MyDownloadItems = ["Files/BGMI.jpg", "Files/1.1.1.1 VPN .png", "Files/windows.png", "Files/kinemaster.png", "Files/camtasia.jpg", "Files/filmora.png", "Files/PUBGLite.png", "Files/vidmate.png", "Files/windows.png", "Files/GIMP.png", "Files/WINRAR.png", "Files/7Zip.png"];

//Array For Selecting Each Elements for Setting Up.
let MyDownloadImgArray = [DownloadItemsImg1, DownloadItemsImg2, DownloadItemsImg3, DownloadItemsImg4, DownloadItemsImg5, DownloadItemsImg6, DownloadItemsImg7, DownloadItemsImg8, DownloadItemsImg9, DownloadItemsImg10, DownloadItemsImg11, DownloadItemsImg12];

//Array For Download Now Items Text.
let MyDownloadNowTextEle = [DownloadItemsName1, DownloadItemsName2, DownloadItemsName3, DownloadItemsName4, DownloadItemsName5, DownloadItemsName6, DownloadItemsName7, DownloadItemsName8, DownloadItemsName9, DownloadItemsName10, DownloadItemsName11, DownloadItemsName12];

//Array For Download Text Contains
let MyDownloadText = [`BGMI`, `1.1.1.1 VPN`, `Windows 10 32Bit`, `KineMaster MOD`, `Camtasia 8`, `Filmora 7.8.9 Free`, `PUBG Lite`, `Vidmate`, `Windows 10 64Bit`, `GIMP`, `WinRar`, `7zip`];
//For Loop For Set Each Images to all.
for (let i = 0; i < MyDownloadImgArray.length; i++) {
    MyDownloadImgArray[i].setAttribute("src", MyDownloadItems[i]);
    MyDownloadNowTextEle[i].textContent = MyDownloadText[i];
}

//Array for Video Thumbnail
let MyVideoList = ["Files/How to Hide Like.jpg", "Files/Top10 Video Editing apps.jpg", "Files/Changing Channel name.jpg", "Files/InstagramFollowers.jpg", "Files/InstagramFollowers1.jpg", "Files/CustomURL.jpg"];

//Array For Video Titles
let MyVideoTitles = ["How to Hide Like & Dislike", "Top 10 VIDEO EDITING Apps For Android | By Technical TechX 🔥", "I am changing my YT Channel's name......", `Instagram के followers कैसे बढ़ाये || how to increase Instagram followers without login || In Hindi`, `Instagram par follower kaise badhaye 2021 || How To Increase followers on Instagram 2021 | one click`, `How To Add Thumbnail on YouTube Videos 2021| How To Set Youtube thumbnail 2021 | Thumbnail कैसे लगाए`];

//Array For Video Title Variables
let MyVideoTitlesEle = [VideoTitle1, VideoTitle2, VideoTitle3, VideoTitle4, VideoTitle5, VideoTitle6];

//Array For Set Each Images.
let mYVar = [VideoThumbnail1, VideoThumbnail2, VideoThumbnail3, VideoThumbnail4, VideoThumbnail5, VideoThumbnail6];

//For Loop For Set Each Images to all.
for (let i = 0; i < MyVideoList.length; i++) {
    mYVar[i].setAttribute("src", MyVideoList[i])
    MyVideoTitlesEle[i].textContent = MyVideoTitles[i];
}

//Variable Of BTN For Hidden
let BTNForHiddenEle = document.getElementById("BTNForHiddenEle");
let Slide = document.getElementById("Slide");
let h1 = document.getElementById("h1");
let HiddenEle = document.getElementById("HiddenEle");
let QuickBTNs2 = document.getElementById("QuickBTNs2");
let SlideSide = document.getElementById("SlideSide");

BTNForHiddenEle.addEventListener("click", () => {
    if (h1.style.paddingTop != "0.5rem") {
        h1.style.paddingTop = "0.5rem";
        h1.style.alignItems = "unset";
        Slide.style.alignItems = "unset";
        Slide.style.borderRadius = "0.1rem";
        Slide.style.height = "5rem";
        BTNForHiddenEle.style.marginTop = "0.30rem"
        HiddenEle.style.display = "flex"
    } else {
        h1.style.paddingTop = "unset";
        h1.style.alignItems = "center";
        Slide.style.borderRadius = "2rem";
        Slide.style.height = "2rem";
        BTNForHiddenEle.style.marginTop = "unset"
        Slide.style.alignItems = "center";
        HiddenEle.style.display = "none"
    }

})

//All Variable Of BTNOfNavSide
let BTNOfNavSide = document.getElementById("BTNOfNavSide");

BTNOfNavSide.addEventListener("click", () => {
    if (SlideSide.className != "Come1") {
        // SlideSide.style.left="0%"
        // SlideSide.style.display="grid"
        SlideSide.className = "Come1"
    } else {
        // SlideSide.style.left="-100%"
        // SlideSide.style.display="none"
        SlideSide.className = "Gone1"

    }

    // var x = document.getElementsByClassName("anchors")[0].id;
})

BTNOfNavSide.addEventListener("mouseover", () => {
    var div = document.createElement('div');
    div.id = 'Hovering';
})
// let y = document.createElement("div")
// y.id = "Hovering"

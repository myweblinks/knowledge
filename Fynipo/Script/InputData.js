//All Variable Declaired
let WebName = document.getElementById("WebName");
let Login = document.getElementById("Login");
let SignUp = document.getElementById("SignUp");
let Catee = document.getElementById("Catee");
let InSideItems1 = document.getElementById("InSideItems1");
let InSideItems2 = document.getElementById("InSideItems2");
let InSideItems3 = document.getElementById("InSideItems3");
let InSideItems4 = document.getElementById("InSideItems4");
let InSideItems5 = document.getElementById("InSideItems5");
let InSideItems6 = document.getElementById("InSideItems6");
let InSideItems7 = document.getElementById("InSideItems7");
let InSideItems8 = document.getElementById("InSideItems8");
let InSideItems9 = document.getElementById("InSideItems9");
let InSideItems10 = document.getElementById("InSideItems10");
let InSideItems11 = document.getElementById("InSideItems11");
let InSideItems12 = document.getElementById("InSideItems12");
let InSideItems13 = document.getElementById("InSideItems13");
let SideIconsimg1 = document.getElementById("SideIconsimg1");
let SideIconsimg2 = document.getElementById("SideIconsimg2");
let SideIconsimg3 = document.getElementById("SideIconsimg3");
let SideIconsimg4 = document.getElementById("SideIconsimg4");
let SideIconsimg5 = document.getElementById("SideIconsimg5");
let SideIconsimg6 = document.getElementById("SideIconsimg6");
let SideIconsimg7 = document.getElementById("SideIconsimg7");
let SideIconsimg8 = document.getElementById("SideIconsimg8");
let SideIconsimg9 = document.getElementById("SideIconsimg9");
let SideIconsimg10 = document.getElementById("SideIconsimg10");
let SideIconsimg11 = document.getElementById("SideIconsimg11");
let SideIconsimg12 = document.getElementById("SideIconsimg12");
let SideIconsimg13 = document.getElementById("SideIconsimg13");
let SideIconsimg14 = document.getElementById("SideIconsimg14");
let SideIconsimg15 = document.getElementById("SideIconsimg15");
let LInBTN1 = document.getElementById("LInBTN1");
let LInBTN2 = document.getElementById("LInBTN2");
let ToSlideOpn = document.getElementById("ToSlideOpn");
let SideBar = document.getElementById("SideBar");
let FiveHomeIcon1 = document.getElementById("FiveHomeIcon1");
let DownloadsShoItems = document.getElementById("DownloadsShoItems");
let DownloadsShower = document.getElementById("DownloadsShower");
let InstagramServices = document.getElementById("InstagramServices");
let InstgramServ = document.getElementById("InstgramServ");
let SearchDIn = document.getElementById("SearchDIn");
let SearchSggt = document.getElementById("SearchSggt");
let Help = document.getElementById("Help");
let SearchSubBTN2 = document.getElementById("SearchSubBTN2");
let SearchSubBTN = document.getElementById("SearchSubBTN");
let NewVideoOnYT = document.getElementById("NewVideoOnYT");
let body = document.body;
let Youtube = document.getElementById("Youtube");

//Website Name Head Input Text
WebName.textContent="GOOGLE";

//Login and Sign Up BTN Text In
Login.textContent="Login";
SignUp.textContent="Sign Up";

//Array For Input Images In Side Bar Options
let SideIconsArry = [SideIconsimg1 , SideIconsimg2 , SideIconsimg3 , SideIconsimg4 , SideIconsimg5 , SideIconsimg6 , SideIconsimg7 , SideIconsimg8 , SideIconsimg9 , SideIconsimg10, SideIconsimg11, SideIconsimg12, SideIconsimg13, SideIconsimg14, SideIconsimg15];

//Array For src For Images
let SideIconssrc = ["Files/home_icon.png","Files/Youtubeb&w.png","Files/B&WInsta.png","Files/Followers.png","Files/Likes.png","Files/downloads.png","Files/windows.png","Files/android.png","Files/ROMs.png","Files/blogs.png","Files/buy.png","Files/fiverr.png","Files/privacyPolicy.png","Files/contactus.png","Files/files.png"];

for (let i = 0; i < SideIconsArry.length; i++) {
    SideIconsArry[i].setAttribute("src", SideIconssrc[i])
}


//Array For Selecting Each Elements
let InSideArray = [InSideItems1 , InSideItems2 ,InstagramServices, InSideItems3 , InSideItems4 ,DownloadsShoItems, InSideItems5 , InSideItems6 , InSideItems7 , InSideItems8 , InSideItems9 , InSideItems10, InSideItems11, InSideItems12, InSideItems13];

//Array For Input Text In Side Bar Options and Update It Later
let SideOptions = ["Home","Youtube","Instagram","Buy Followers","Buy Likes","Downloads","PC Software","Android Apps","Android ROMs","Blogs","Buy Products","Fiverr Gigs Info","Privacy Policy","Contact Us","Request A File"];
for (let i = 0; i < InSideArray.length; i++) {
    InSideArray[i].innerHTML+=SideOptions[i];
}


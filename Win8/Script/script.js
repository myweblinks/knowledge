let SideBar = document.getElementById("SideBar");
let hoverItTop = document.getElementById("hoverItTop");
let hoverItBottom = document.getElementById("hoverItBottom");
let Box1 = document.getElementById("Box1");
let Box2 = document.getElementById("Box2");
let Box3 = document.getElementById("Box3");
let Box4 = document.getElementById("Box4");
let Box5 = document.getElementById("Box5");

let EventArry = [hoverItTop, hoverItBottom];

for (let i = 0; i < EventArry.length; i++) {
    EventArry[i].addEventListener("mouseover", () => {
        SideBar.style.right = "0";
    });
    EventArry[i].addEventListener("mouseout", () => {
        SideBar.style.right = "-7rem";
    });
}
SideBar.addEventListener("mouseover", () => {
    SideBar.style.right = "0";

})
SideBar.addEventListener("mouseout", () => {
    SideBar.style.right = "-7rem";
    SideBar.style.backgroundColor = "transparent";
})

let Boxes = [Box1, Box2, Box3, Box4, Box5];

for (let i = 0; i < Boxes.length; i++) {
    Boxes[i].addEventListener("mouseover", () => {
        SideBar.style.backgroundColor = "#111";
    })
}

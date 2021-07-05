let MoreBTN = document.getElementById("MoreBTN");
let windowUnderBTN = document.getElementById("windowUnderBTN");
let Ab1 = document.getElementById("Ab1");
let Ab2 = document.getElementById("Ab2");

MoreBTN.addEventListener("click", () => {
    if (windowUnderBTN.style.display != "flex") {
        windowUnderBTN.style.display = "flex"
        Ab1.className="ACome"
        Ab2.className="BCome"
    } else {
        windowUnderBTN.style.display = "none"
        Ab1.className="AGone"
        Ab2.className="BGone"
    }
});

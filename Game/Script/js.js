let CarMove = document.getElementById("CarDiv");
let a = 0;
let b = null;
let c = -35;
let d = c;

let bottom1 = document.getElementById("bottom");
let top1 = document.getElementById("top");
let right1 = document.getElementById("right");
let left1 = document.getElementById("left");
left1.addEventListener("click", function (event) {
  

        if (b == -11) {
        } else {
            b--;
            CarMove.style.left = b * 19 + "px";
        }
        a = b;
    
    return a;
})
right1.addEventListener("click", function (event) {
  
    if (a == 11) {

    } else {
        a++;
        CarMove.style.left = a * 19 + "px";
        b = a;
    }
    return b;
})
top1.addEventListener("click", function (event) {
  
    if (c == 35) {
    } else {
        c++;
        CarMove.style.bottom = c + "%";
    }
    d=c;
    return d;
})
bottom1.addEventListener("click", function (event) {
  
    if (d == -35) {
    } else {
        d--;
        CarMove.style.bottom = d + "%";
    }
    c = d;
    return c;
})



addEventListener("keypress", function (event) {
    let k = event.key;
    if (k == "d" || k == "D") {
        if (a == 11) {

        } else {
            a++;
            CarMove.style.left = a * 19 + "px";
            b = a;
        }

    }

    if (k == "a" || k == "A") {

        if (b == -11) {
        } else {
            b--;
            CarMove.style.left = b * 19 + "px";
        }
        a = b;
    }
    if (k == "w" || k == "W") {

        if (c == 35) {
        } else {
            c++;
            CarMove.style.bottom = c + "%";
        }
    }
    d = c;
    if (k == "s" || k == "S") {

        if (d == -35) {
        } else {
            d--;
            CarMove.style.bottom = d + "%";
        }
        c = d;
    }
});


// Variables 








// Key Codes 
// left = 37.
// up = 38.
// right = 39.
// down = 40.
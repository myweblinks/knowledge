let  BlogDes1 = document.getElementById("BlogDes1");
let  BlogDes2 = document.getElementById("BlogDes2");
let  BlogDes3 = document.getElementById("BlogDes3");
let  BlogDes4 = document.getElementById("BlogDes4");
let  BlogDes5 = document.getElementById("BlogDes5");
let  BlogDes6 = document.getElementById("BlogDes6");
let  blogTit1 = document.getElementById("blogTit1");
let  blogTit2 = document.getElementById("blogTit2");
let  blogTit3 = document.getElementById("blogTit3");
let  blogTit4 = document.getElementById("blogTit4");
let  blogTit5 = document.getElementById("blogTit5");
let  blogTit6 = document.getElementById("blogTit6");

let VarBlogTits = [blogTit1, blogTit2, blogTit3, blogTit4, blogTit5, blogTit6];
let VarBlogDess = [BlogDes1, BlogDes2, BlogDes3, BlogDes4, BlogDes5, BlogDes6];

let CntnBlogTit = ["How to install TWRP on Samsung Galaxy Grand Neo Plus?","How to download and install Game Guardian?","Hack game with Game Guardian App.","Root Any android mobilw with KingRoot Software For Windows.","Custom ROM Advantage and Disadvantages.","Download Windows 7 32Bit."];
let CntnBlogDes = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus aut labore nisi harum consectetur perferendis tempore necessitatibus fuga asperiores voluptatem rerum consequuntur ipsa dolorem, debitis saepe similique molestias dicta."]

for (let i = 0; i < VarBlogTits.length; i++) {
    VarBlogTits[i].textContent=CntnBlogTit[i];
    VarBlogDess[i].textContent=CntnBlogDes[i];
}
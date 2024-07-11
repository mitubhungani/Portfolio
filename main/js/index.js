import getdata from "../../admin/components/get.js";
import mainnav from "../components/mainnav.js";

document.getElementById("header").innerHTML = mainnav();

const proui = (data) => {
  document.getElementById("project-content").innerHTML = "";
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let imgbox = document.createElement("div");
    imgbox.setAttribute("id", "imgbox");

    let image = document.createElement("img");
    image.src = pro.file;
    image.setAttribute("id", "image");

    imgbox.append(image);

    let textbox = document.createElement("div");
    textbox.setAttribute("id", "textbox");

    let title = document.createElement("p");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let desc = document.createElement("p");
    desc.innerHTML = pro.desc;
    desc.setAttribute("id", "desc");

    textbox.append(title, desc);

    let btnbox = document.createElement("div");
    btnbox.setAttribute("id", "btnbox");

    let checkbtn = document.createElement("button");
    checkbtn.innerHTML = "Click";
    checkbtn.setAttribute("id", "checkbtn");

    checkbtn.addEventListener("click", () => {
      window.open(pro.url);
    });

    btnbox.append(checkbtn);

    box.append(imgbox, textbox, btnbox);
    document.getElementById("project-content").append(box);
  });
};

const get = async () => {
  let res = await fetch("https://json-render-portfolio.onrender.com/product");
  let data = await res.json();
  proui(data);
};
get();



const no=()=>{
  if(window.scrollY>10){
    document.getElementById("header").style.backgroundColor="#650077";
    document.getElementById("header").style.transition="0.5s";
  }
  else{
    document.getElementById("header").style.backgroundColor="transparent";
  }
  console.log(window.scrollY);
}
no()
document.addEventListener("scroll",no)
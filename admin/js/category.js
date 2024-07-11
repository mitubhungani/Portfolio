import deletedata from "../components/delete.js";
import updatedata from "../components/update.js"; 
import getdata from "../components/get.js";
import postdata from "../components/post.js";
import nav from "../components/nav.js";

document.getElementById("header").innerHTML = nav();

const addcat = (e) => {
  e.preventDefault();
  let hi = {
    category: document.getElementById("category").value,
  };
  console.log(hi);
  console.log(id);
  if (id == -1) {
    postdata("https://json-render-portfolio.onrender.com/category", hi);
  } else {
    updatedata(`https://json-render-portfolio.onrender.com/category/${id}`, hi);
  }
};
getdata("https://json-render-portfolio.onrender.com/category");

let id = -1;

const edit = (data) => {
  document.getElementById("category").value = data.category;
  id = data.id;
  document.getElementById("for").addEventListener("submit", addcat);
};

const catui = (data) => {
  document.getElementById("show").innerHTML = "";
  let box = document.createElement("div");
  box.setAttribute("id","box");

  data.map((cat, i) => {
    let catname = document.createElement("p");
    catname.innerHTML = cat.category;
    catname.setAttribute("id", "catname");

    let span = document.createElement("span");
    span.innerHTML = `${i + 1}.`;
    span.setAttribute("class", "label");

    let update = document.createElement("span");
    update.innerHTML = `<i class="fa-solid fa-pen-to-square fa-lg"></i>`;
    update.setAttribute("id", "up");

    update.addEventListener("click", () => {
      edit(cat);
    });

    let del = document.createElement("span");
    del.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`;
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {
      deletedata(`https://json-render-portfolio.onrender.com/category/${cat.id}`);
    });

    let add_grp = document.createElement("div");
    add_grp.setAttribute("id", "AddGroup");

    add_grp.append(span, catname, update, del);

    box.append(add_grp);
    document.getElementById("show").append(box);
  });
};

const get = async () => {
  let res = await fetch("https://json-render-portfolio.onrender.com/category");
  let data = await res.json();
  catui(data);
  document.getElementById("for").addEventListener("submit", addcat);
};
get();
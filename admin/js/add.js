import deletedata from "../components/delete.js";
import getdata from "../components/get.js";
import postdata from "../components/post.js";
import updatedata from "../components/update.js"; 
import nav from "../components/nav.js";
var imgs=''
document.getElementById("header").innerHTML = nav();
document.getElementById("file").innerHTML='nlknl'
document.getElementById('file').addEventListener('change', () => {
   
  function hi() {
    let files = document.getElementById('file').files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            imgs = reader.result;
          },
          false,
        );
        reader.readAsDataURL(file);
      }
    }
    if (files) {
      Array.prototype.forEach.call(files, readAndPreview);
    }
  }
  hi()
  
})
console.log(imgs);

const proinfo = (e) => {
 
  e.preventDefault();
  let newpro = {
    title: document.getElementById("title").value,
    desc: document.getElementById("desc").value,
    file:imgs,
    category: document.getElementById("cat").value,
    url: document.getElementById("url").value,
  };

  console.log(newpro);
  console.log(id);
  if (id == -1) {
    postdata("http://localhost:3000/product", newpro);
  } else {
    updatedata(`http://localhost:3000/product/${id}`, newpro);
  }
};

getdata("http://localhost:3000/product");

const catui = (data) => {
  const categorySelect = document.getElementById("cat");
  categorySelect.innerHTML = `<option selected hidden value="">Select Category</option>`;
  data.forEach((pro) => {
    let opt = document.createElement("option");
    opt.innerHTML = pro.category;
    opt.setAttribute("id", "cate");
    categorySelect.append(opt);
  });
};

const loadCategories = async () => {
  let res = await getdata("http://localhost:3000/category");
  let data = await res;
  console.log(data);
  catui(data);
};

loadCategories();

//show ui
let id = -1;
const edit = (data) => {
  document.getElementById("title").value = data.title,
  document.getElementById("desc").value = data.desc,
  document.getElementById("cat").value = data.category,
  document.getElementById("url").value = data.url;
  id = data.id;
  document.getElementById("for").addEventListener("submit", proinfo);
};

const ui = (data) => {
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let span = document.createElement("span");
    span.innerHTML = `${i + 1}.`;
    span.setAttribute("id", "label");

    let title = document.createElement("p");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let desc = document.createElement("p");
    desc.innerHTML = pro.desc;
    desc.setAttribute("id", "desc");

    let file = document.createElement("img");
    file.src = pro.file;
    file.setAttribute("id", "outfile");

    let category = document.createElement("p");
    category.innerHTML = pro.category;
    category.setAttribute("id", "category");

    let url = document.createElement("a");
    url.innerHTML = `Click`;
    url.href = pro.url;
    url.setAttribute("id", "clickurl");

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`;
    deleteBtn.setAttribute("id", "deleteBtn");

    deleteBtn.addEventListener("click", () => {
      deletedata(`http://localhost:3000/product/${pro.id}`);
    });

    let updateBtn = document.createElement("span");
    updateBtn.innerHTML = `<i class="fa-solid fa-pencil-square fa-lg"></i>`;
    updateBtn.setAttribute("id", "updateBtn");
    updateBtn.addEventListener("click", () => {
      edit(pro);
    });

    box.append(span, title, desc, file, category, url, deleteBtn, updateBtn);
    document.getElementById("show-ui").append(box);
  });
};

const get = async () => {
  let res = await fetch("http://localhost:3000/product");
  let data = await res.json();
  ui(data);
  document.getElementById("for").addEventListener("submit", proinfo);
};
get();

//-------------------------------------------

// import deletedata from "../components/delete.js";
// import getdata from "../components/get.js";
// import nav from "../components/nav.js";
// import postdata from "../components/post.js";
// import updatedata from "../components/update.js";

// document.getElementById("header").innerHTML = nav();

// const proinfo = (e) => {
//     e.preventDefault();
//   let newpro = {
//     title: document.getElementById("title").value,
//     desc: document.getElementById("desc").value,
//     file: document.getElementById("file").value,
//     category: document.getElementById("cat").value,
//     url: document.getElementById("url").value,
//   };

//   console.log(newpro);
//   if(id==-1) {
//     postdata("http://localhost:3000/product", newpro);

//   }
//   else{
//     updatedata(`http://localhost:3000/product/${id}`, newpro);
//   }
// };

// getdata("http://localhost:3000/product")

// const catui = (data) => {
//   const categorySelect = document.getElementById("cat");
//   categorySelect.innerHTML = `<option selected hidden value="">Select Category</option>`;
//   data.forEach((pro) => {
//     let opt = document.createElement("option");
//     opt.innerHTML = pro.category;
//     opt.setAttribute("id", "cate");
//     categorySelect.append(opt);
//   });
// };

// const loadCategories = async () => {
//   let res = await getdata("http://localhost:3000/category");
//   let data = await res;
//   console.log(data);
//   catui(data);
// };

// loadCategories();

// //show ui
// let id = -1;
// const edit=(data)=>{
//      document.getElementById("title").value=data.title,
//      document.getElementById("desc").value=data.desc,
//      document.getElementById("file").value=data.file,
//      document.getElementById("cat").value=data.category,
//      document.getElementById("url").value=data.url
//      id=data.id
//      document.getElementById("for").addEventListener("submit", proinfo);
// }

// const ui = (data) => {
//   data.map((pro, i) => {
//     let box = document.createElement("div");
//     box.setAttribute("id", "box");

//     let span = document.createElement("span");
//     span.innerHTML = `${i + 1}.`;
//     span.setAttribute("class", "label");

//     let title = document.createElement("p");
//     title.innerHTML = pro.title;
//     title.setAttribute("class", "title");

//     let desc = document.createElement("p");
//     desc.innerHTML = pro.desc;
//     desc.setAttribute("class", "desc");

//     let file = document.createElement("p");
//     file.innerHTML = pro.file;
//     file.setAttribute("class", "file");

//     let category = document.createElement("p");
//     category.innerHTML = pro.category;
//     category.setAttribute("class", "category");

//     let url = document.createElement("p");
//     url.innerHTML = pro.url;
//     url.setAttribute("class", "url");

//     let deleteBtn = document.createElement("span");
//     deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`;
//     deleteBtn.setAttribute("id", "deleteBtn");

//     deleteBtn.addEventListener("click", () => {
//       deletedata(`http://localhost:3000/product/${pro.id}`);
//     });

//     let updateBtn = document.createElement("span");
//     updateBtn.innerHTML = `<i class="fa-solid fa-pencil-square fa-lg"></i>`;
//     updateBtn.setAttribute("id", "updateBtn");
//     updateBtn.addEventListener("click", () => {
//       edit(pro);
//     });

//     box.append(span, title, desc, file, category, url, deleteBtn, updateBtn);
//     document.getElementById("show-ui").append(box);
//   });
// };

// const get = async () => {
//     let res = await fetch("http://localhost:3000/category");
//     let data = await res.json();
//     ui(data);
//     document.getElementById("for").addEventListener("submit", proinfo);
//   };
//   get();

// let lists = document.querySelectorAll("li");
// let form = document.getElementById("form");
// let input = document.getElementById("input");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let item = input.value;

// });

// for (let list of lists) {
//   let btn = document.createElement("button");
//   btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
//   btn.textContent = "Remove";
//   list.appendChild(btn);
//   //DOM event
//   btn.addEventListener("click", e => {
//     console.log(e.target);
//     // list.remove();
//     btn.parentElement.remove();
//   });
// }
let child = document.getElementById("child");
let parent = document.getElementById("parent");
let grandParent = document.getElementById("grandParent");

child.addEventListener("click", e => {
  console.log("child clicked");
  e.stopPropagation()
});
parent.addEventListener("click", e => {
  console.log("parent clicked");
});
grandParent.addEventListener("click", e => {
  console.log("Grand parent clicked");
});

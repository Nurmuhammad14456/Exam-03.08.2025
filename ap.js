const kirish = document.querySelector("#kirish");
const seidbar = document.querySelector("#sidebar");
const chiqish = document.querySelector("#chiqish");

kirish.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  sidebar.classList.remove("-translate-x-full");
});

chiqish.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  setTimeout(() => {
    sidebar.classList.add("hidden");
  }, 300);
});

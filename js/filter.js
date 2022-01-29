const input = document.querySelector(".post-container__search");
const ul = document.querySelector(".post-container__list");
const li = document.querySelectorAll(".post-container__item");

const search = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...li];
  console.log(tasks);
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

input.addEventListener("input", search);

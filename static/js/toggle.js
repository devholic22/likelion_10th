const toggleBtn = document.querySelectorAll(".toggle-btn");

const toggleClick = (event) => {
  const parent = event.target.parentElement.parentElement;
  const content = parent.querySelector(".article-content-value");
  if (content.classList.contains("hidden")) {
    event.target.classList.remove("fa-caret-right");
    event.target.classList.add("fa-caret-down");
  } else {
    event.target.classList.remove("fa-caret-down");
    event.target.classList.add("fa-caret-right");
  }
  content.classList.toggle("hidden");
};

toggleBtn.forEach((toggle) => toggle.addEventListener("click", toggleClick));

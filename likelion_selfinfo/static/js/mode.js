const html = document.querySelector("html");
const article = document.querySelector(".article-content");

// whiteBtn 버튼 (해)
const whiteBtn = document.createElement("i");
whiteBtn.classList.add("fas");
whiteBtn.classList.add("fa-sun");
whiteBtn.classList.add("icon");
whiteBtn.classList.add("hidden");

// darkBtn 버튼 (달)
const darkBtn = document.createElement("i");
darkBtn.classList.add("fas");
darkBtn.classList.add("fa-moon");
darkBtn.classList.add("icon");
darkBtn.classList.add("hidden");

const paintWhite = () => {
  article.appendChild(whiteBtn);
  whiteBtn.classList.remove("hidden");
};

const clickWhite = () => {
  setTimeout(() => {
    html.classList.add("dark");
    article.removeChild(whiteBtn);
    paintDark();
  }, 1000);
};

const paintDark = () => {
  article.appendChild(darkBtn);
  darkBtn.classList.remove("hidden");
  darkBtn.addEventListener("click", clickDark);
};

const clickDark = () => {
  setTimeout(() => {
    html.classList.remove("dark");
    article.removeChild(darkBtn);
    paintWhite();
  }, 1000);
};

// 초기 상태
if (!(article.contains(whiteBtn) && article.contains(darkBtn))) {
  paintWhite();
  whiteBtn.addEventListener("click", clickWhite);
}

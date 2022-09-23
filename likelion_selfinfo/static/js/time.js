const clock = document.querySelector(".clock-value");

const getTime = () => {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${seconds}`;
};

getTime();
setInterval(getTime, 1000);

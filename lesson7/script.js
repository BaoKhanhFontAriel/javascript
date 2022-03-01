const button = document.querySelector("button");
const background = document.body;

setInterval(changeColor, 5000);

function changeColor(){
  const color1 = Math.floor(Math.random() * 16777215).toString(16);
  const color2 = Math.floor(Math.random() * 16777215).toString(16);
  background.style.backgroundImage = `linear-gradient(to right, #${color1}, #${color2})`;
}

button.addEventListener("click", (e) => {
  changeColor();
});

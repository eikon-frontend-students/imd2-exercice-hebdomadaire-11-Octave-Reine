const button = document.getElementById("likeBtn");
const count = document.getElementById("count");

let liked = false;

button.addEventListener("click", function () {
  if (liked === false) {
    button.classList.add("active");
    count.textContent = parseInt(count.textContent) + 1;
    liked = true;
  } else {
    button.classList.remove("active");
    count.textContent = parseInt(count.textContent) - 1;
    liked = false;
  }
});

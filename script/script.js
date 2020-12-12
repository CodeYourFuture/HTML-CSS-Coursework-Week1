// button:Read More & Read Less.

const dots1 = document.getElementById("dot-1");
const dots2 = document.getElementById("dot-2");
const dots3 = document.getElementById("dot-3");
const moreText1 = document.getElementById("more-1");
const moreText2 = document.getElementById("more-2");
const moreText3 = document.getElementById("more-3");
const btnText1 = document.getElementById("btn-1");
const btnText2 = document.getElementById("btn-2");
const btnText3 = document.getElementById("btn-3");
btnText1.addEventListener("click", () => {
  if (moreText1.style.display === "none") {
    moreText1.style.display = "block";
    dots1.style.display = "none";
  } else {
    moreText1.style.display = "none";
    dots1.style.display = "block";
  }
});
btnText2.addEventListener("click", () => {
  if (moreText2.style.display === "none") {
    moreText2.style.display = "block";
    dots2.style.display = "none";
  } else {
    moreText2.style.display = "none";
    dots2.style.display = "block";
  }
});
btnText3.addEventListener("click", () => {
  if (moreText3.style.display === "none") {
    moreText3.style.display = "block";
    dots3.style.display = "none";
  } else {
    moreText3.style.display = "none";
    dots3.style.display = "block";
  }
});
// button -read more .. dropdown more information about the current article.
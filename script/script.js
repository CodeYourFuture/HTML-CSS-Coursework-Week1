// button:Read More & Read Less

// const btn1 = document.getElementById('btn1')
// const bnt2 = document.getElementById('bnt2')
// const btn3 = document.getElementById('bnt3')
// const more__article1 = document.getElementById('more__article1')
// const more__article2 = document.getElementById('more__article2')
// const more__article3 = document.getElementById('more__article3')
function myFunction () {
  const dots1 = document.getElementById('dot-1')
  const moreText = document.getElementById('more-1')
  const btnText = document.getElementById('btn-1')

  if (dots1.style.display === 'none') {
    dots1.style.display = 'inline'
    btnText.innerHTML = 'Read more'
    moreText.style.display = 'none'
  } else {
    dots1.style.display = 'none'
    btnText.innerHTML = 'Read less'
    moreText.style.display = 'inline'
  }
}
// btn3.addEventListener("click", () => {
//   if (moreInfo__article3.style.display === "none") { //Here I am sure that we just toggling the more info text etc..
//     moreInfo__article3.style.display = "block";
//   } else {
//     moreInfo__article3.style.display = "none";
//   }
// });
// btn1.addEventListener('<Here you place the event you want>', ()=>{
//   //Here you write the code that you want to run
// })

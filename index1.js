const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelector(".images");

let index = 1;

let transitioning = false;

left.addEventListener("click", () => {
  if (transitioning) return;
  //  if (index == 1) return;
  index--;
  images.style.transition = "transform 0.4s ease-in-out";
  images.style.transform = `translateX(${(-index * 100) / 7}%)`;
});

right.addEventListener("click", () => {
  if (transitioning) return;
  //  if (index == 6) return;

  index++;
  images.style.transition = "transform 0.4s ease-in-out";
  images.style.transform = `translateX(${(-index * 100) / 7}%)`;
  clearInterval(mytimer);
  mytimer = setInterval(() => {
    // if (transitioning) return;
    index++;
    images.style.transition = "transform 0.4s ease-in-out";
    images.style.transform = `translateX(${(-index * 100) / 7}%)`;
  }, 3000);
});

images.addEventListener("transitionend", () => {
  if (index === 6) {
    index = 1;
    images.style.transition = "none";
    images.style.transform = `translateX(${(-index * 100) / 7}%)`;
  } else if (index === 0) {
    index = 5;
    images.style.transition = "none";
    images.style.transform = `translateX(${(-index * 100) / 7}%)`;
  }
  transitioning = false;
});

images.addEventListener("transitionstart", () => {
  transitioning = true;
});

// setInterval(() => {
//     // if (transitioning) return;

//  index++;
//  images.style.transition = "transform 0.4s ease-in-out";
//  images.style.transform = `translateX(${-index * 100 / 7}%)`;
// }, 3000)

var mytimer = setInterval(() => {
  // if (transitioning) return;
  index++;
  images.style.transition = "transform 0.4s ease-in-out";
  images.style.transform = `translateX(${(-index * 100) / 7}%)`;
}, 3000);

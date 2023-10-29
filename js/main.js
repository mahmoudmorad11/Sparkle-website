//selectin elements
let menuBtn = document.querySelector(".navbar button");
let menuIconSpan = document.querySelectorAll(".navbar .menu span");
let srvsSection = document.querySelector(".services");
let progs = document.querySelectorAll(".services .progress-bar");
let playBtn = document.querySelector(".video .play-video");
let videoContainer = document.querySelector(".video .video-container");
let closeVidBtn = document.querySelector(".video .video-container .close-div");

// width increase on scroll animation
window.onscroll = () => {
  if (window.scrollY >= srvsSection.offsetTop + 50) {
    progs.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
};

// toggle menu animation
menuBtn.onclick = function () {
  if (menuBtn.getAttribute("aria-expanded") == "true") {
    menuIconSpan.forEach((span) => (span.style.width = "25px"));
  } else {
    menuIconSpan[1].style.width = "20px";
    menuIconSpan[2].style.width = "15px";
  }
};

//play and close video
playBtn.onclick = () => {
  videoContainer.classList.remove("hidden");
};
closeVidBtn.addEventListener("click", () => {
  videoContainer.classList.add("hidden");
});

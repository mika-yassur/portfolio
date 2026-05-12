const stackImages = document.querySelectorAll(".stack-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerBase = window.innerHeight * 0.1;

  stackImages.forEach((img, index) => {
    const triggerPoint = triggerBase + index * window.innerHeight * 0.3;

    if (scrollY > triggerPoint) {
      // STACK (scrolling down)
      img.style.top = "0";
      img.style.opacity = "1";
      img.style.zIndex = 2 + index;
    } else {
      // UNSTACK (scrolling back up)
      img.style.top = "100px";   // or whatever your starting offset is
      img.style.opacity = "0";
      img.style.zIndex = "1";
    }
  });
});
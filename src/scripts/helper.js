// ** FADE OUT FUNCTION **
export const fadeOut = (el) => {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.05) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

// ** FADE IN FUNCTION **
export const fadeIn = (el, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.05) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

var initLogo = () => {
const interval = 2500,
  elWorld = document.querySelector(".mat"),
  els = Array.from(elWorld.querySelectorAll("a"));

let i = 0;

(function f() {
  const el = els[i],
    style = getComputedStyle(el),
    
    x = style.getPropertyValue("--x"),
    y = style.getPropertyValue("--y"),
    z = style.getPropertyValue("--z"),
    angle = style.getPropertyValue("--a"),
    a = -parseFloat(angle);
  
  elWorld.style.transform = `rotate3d(${x},${y},${z},${a}deg)`;

  for (const [j, el] of els.entries()) {
    el.classList.toggle("focus", j == i);
  }

  i = (i + 1) % els.length;
  setTimeout(f, interval);
}())
};

export default initLogo;
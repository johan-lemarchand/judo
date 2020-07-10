var initMenu = () => {
  
var $menu = document.querySelector(".menu");
var $menuUl = document.querySelector(".menu ul");
var $menuTitle = document.querySelector(".menuTitle");
var $menuContainer = document.querySelector(".menuContainer");
var count = 0;
var click = true;

$menuTitle.style.color = "#e6243e";

  $menuTitle.addEventListener("click", function (event) {
    if (click) {

/* Bande Noire */
      click = false;
      $menuTitle.style.zIndex = 9;
      //$menuUl.style.display = "none";

      var tl = new TimelineLite();

      tl.to($menuTitle, 0.25, { x: 0, y: -50, color: "#000" });
      tl.to($menuContainer, 0.25, {css: {height: 225}});
      tl.to($menu, 0.25, {
        css: {
          width: '80%',
          height: 75,
          x: 0,
          y: 70,
          background: "#fff",
          borderRadius: 0,
          borderTop: "1px solid #D8D8D8",
          color: "#0f55a3",
        },
        ease: Expo.easeOut, 
      });
      tl.to($menuTitle, 0.25, {color: "#0f55a3" });
      tl.to($menuUl, 0.1, {css: {display: "block" }});


      /*setTimeout(function(){
      $menuUl.fadeIn();
    }, 250);*/

/* Cercle blanc */     
    } else {
      click = true;
      $menuTitle.style.zIndex = 11;
      event.target.style.borderRadius = "100%";

      var tl = new TimelineLite();

      tl.to($menuTitle, 0.2, {opacity: 0 });
      tl.to($menu, 0.2, { x: 0, y: 20, color: "#fff" });
      tl.to($menuTitle, 0.2, { x: 0, y: 0, opacity:0 });
      tl.to($menuContainer, 0.1, {css: {height: 150}});
      tl.to($menu, 0.25, {
        css: {
          width: 150,
          height: 150,
          x: 0,
          y: 0,
          background: "#fff",
          borderRadius: "100%",
          borderTop: "1px solid #D8D8D8",
        },
        ease: Expo.easeOut,
      });
      tl.to($menuTitle, 0.2, { x: 0, y: 0, opacity:1, color: "#e6243e" });
      $menuUl.style.display = "none";
    }
  });
};

export default initMenu;

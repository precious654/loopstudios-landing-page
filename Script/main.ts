let closeButton = document.querySelector(".close-button");

let openButton = document.getElementById("nav-menu");

let navList = document.querySelector(".nav-list") as HTMLElement;

closeButton?.addEventListener( "click", function() {
  navList.style.width = "0";
} );

openButton?.addEventListener( "click", function() {
  navList.style.width = "100%";
} );

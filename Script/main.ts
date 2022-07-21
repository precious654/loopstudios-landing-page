let closeButton = document.querySelector(".close-button");

let navList = document.querySelector(".nav-list") as HTMLElement;

closeButton?.addEventListener( "click", function() {
  navList.style.width = "0";
} );

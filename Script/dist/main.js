"use strict";
let closeButton = document.querySelector(".close-button");
let navList = document.querySelector(".nav-list");
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
    navList.style.width = "0";
});

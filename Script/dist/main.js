"use strict";
let closeButton = document.querySelector(".close-button");
let openButton = document.getElementById("nav-menu");
let navList = document.querySelector(".nav-list");
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
    navList.style.width = "0";
});
openButton === null || openButton === void 0 ? void 0 : openButton.addEventListener("click", function () {
    navList.style.width = "100%";
});

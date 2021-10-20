// JS FOR NAVIGATION BAR EFFECT ON SCROLL
window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY >0);
});

// JS FOR RESPONSIVE NAV BAR MENU
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("active");
	navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
	navigationItem.addEventListener("click", () => {
		menuBtn.classList.remove("active");
		navigation.classList.remove("active");
	});
});
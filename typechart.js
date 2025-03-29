
function themeToggle() {
	document.getElementById("ld-toggle").addEventListener("click", function() {
		document.body.classList.toggle("dark-mode");
		
		var icon = document.getElementById("icon");
		icon.classList.toggle("fa-moon");
		icon.classList.toggle("fa-sun");
		
});
}
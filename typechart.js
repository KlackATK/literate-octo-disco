
function themeToggle() {
	document.getElementById("ld-toggle").addEventListener("click", function() {
		document.body.classList.toggle("light-mode");
		document.body.classList.toggle("dark-mode");
});
}
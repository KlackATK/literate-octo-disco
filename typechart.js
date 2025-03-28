( function {
	let onpageLoad = local.storage.getItem("theme") || "";
	var ballTop = document.getElementById("ball-top");
	var band1 = document.getElementById("band-1");
	var band2 = document.getElementById("band-2");
	var band3 = document.getElementById("band-3");
	var body = document.body;
	
	element.classList.add(onpageLoad);
	document.getElementById("theme").textContent = localStorage.getItem("theme") || "light";
})();

function themeToggle() {
	let body = document.body;
	body.classList.toggle("dark-mode");
	
	let theme = localStorage.getItem("theme");
	if (theme && theme === "dark-mode") {
		localStorage.setItem("theme", "");
	} else {
		localStorage.setItem("theme", "dark-mode");
	}
	
	document.getElementById("theme").textContent = localStorage.getItem("theme");
}
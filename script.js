const themeToggle = document.querySelector("#light-mode-btn");

try {
	themeToggle.checked = localStorage.getItem("portfolio-theme") === "light";
} catch (error) {
	themeToggle.checked = false;
}

themeToggle.setAttribute("aria-checked", String(themeToggle.checked));

// Save the selected theme so it remains active on the next visit.
themeToggle.addEventListener("change", () => {
	const theme = themeToggle.checked ? "light" : "dark";
	themeToggle.setAttribute("aria-checked", String(themeToggle.checked));

	try {
		localStorage.setItem("portfolio-theme", theme);
	} catch (error) {
		// The theme still works for this visit when storage is unavailable.
	}
});

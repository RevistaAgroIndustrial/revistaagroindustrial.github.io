document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header-container", "include/header.html");
    loadHTML("footer-container", "include/footer.html");
});

function loadHTML(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading file:", error));
}

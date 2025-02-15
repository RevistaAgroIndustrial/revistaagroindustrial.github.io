function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error("Error loading the file: ", error));
}

window.onload = function() {
   // loadHTML("header-container", "header.html");
    loadHTML("footer-container", "footer.html");
};

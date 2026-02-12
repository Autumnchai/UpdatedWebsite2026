document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    var fullImg = document.createElement("img");
    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    document.querySelectorAll(".project-gallery img").forEach(function (img) {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            fullImg.src = this.src;
            fullImg.alt = this.alt;
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
    });
});

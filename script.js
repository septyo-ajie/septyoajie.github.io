const images = document.querySelectorAll(
    ".gallery img, .certificate img, .profile"
);

images.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";

        overlay.style.background = "rgba(0,0,0,.9)";

        overlay.style.display = "flex";

        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";

        overlay.style.zIndex = "9999";

        const img = document.createElement("img");

        img.src = image.src;

        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";

        img.style.borderRadius = "10px";

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

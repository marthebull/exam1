export default class Lightbox {
    static activate() {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="lightbox" id="lightbox">
            <div class="lightbox-inner" style="min-height: 50px;>
                <button type="button" class="lightbox-close">
                    &times;
                </button>
                <div class="lightbox-content">

                </div>
            </div>
        </div>
        `);

        const lightBox = document.querySelector("#lightbox");
        const closeBtn = lightBox.querySelector(".lightbox-close");
        const content = lightBox.querySelector(".lightbox-inner");
        
        const closeLightbox = () => {
            lightBox.style.display = "none";
            content.innerHTML = "";
        };

        lightBox.addEventListener("mousedown", e => {
            if (e.target.matches("#lightbox")) {
                closeLightbox();
            }
        });

        closeBtn.addEventListener("click", () => {
            closeLightbox();
        });
    }

    static show(htmlOrElement) {
        const content = document.querySelector("#lightbox .lightbox-content");

        

        content.innerHTML = htmlOrElement;
    }
}
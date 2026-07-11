/*====================================================
                HERO SLIDER
====================================================*/

function initHeroSlider() {

    const heroImage = document.getElementById("heroImage");

    if (!heroImage) return;

    let currentSlide = 0;

    // Preload images
    Config.heroImages.forEach(slide => {

        const img = new Image();

        img.src = Config.heroFolder + slide.file;

    });

    function setImagePosition() {

        const slide = Config.heroImages[currentSlide];

        heroImage.style.objectPosition =
            window.innerWidth <= 768
                ? slide.mobile
                : slide.desktop;

    }

    function showSlide(index) {

        heroImage.style.opacity = "0";

        setTimeout(() => {

            heroImage.src =
                Config.heroFolder +
                Config.heroImages[index].file;

            setImagePosition();

            heroImage.onload = () => {

                heroImage.style.opacity = "1";

            };

        }, 400);

    }

    heroImage.src =
        Config.heroFolder +
        Config.heroImages[0].file;

    setImagePosition();

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= Config.heroImages.length)
            currentSlide = 0;

        showSlide(currentSlide);

    }, Config.heroInterval);

    window.addEventListener("resize", setImagePosition);

}



/*====================================================
                GALLERY
====================================================*/

function initGallery() {

    const track = document.querySelector(".gallery-track");

    if (!track) return;

    // Create Images Automatically

    Config.galleryImages.forEach(image => {

        const img = document.createElement("img");

        img.src =
            Config.galleryFolder + image;

        img.alt = Config.company.name;

        img.loading = "lazy";

        track.appendChild(img);

    });


    const images = track.querySelectorAll("img");

    const next =
        document.querySelector(".gallery-btn.next");

    const prev =
        document.querySelector(".gallery-btn.prev");

    let currentIndex = 0;

    function visibleImages() {

        if (window.innerWidth < 768)
            return 1;

        if (window.innerWidth < 992)
            return 2;

        return 3;

    }

    function updateSlider() {

        const imageWidth =
            images[0].offsetWidth + 20;

        track.style.transform =
            `translateX(-${currentIndex * imageWidth}px)`;

    }

    next.addEventListener("click", () => {

        const visible = visibleImages();

        if (currentIndex <
            images.length - visible) {

            currentIndex++;

        }
        else {

            currentIndex = 0;

        }

        updateSlider();

    });


    prev.addEventListener("click", () => {

        const visible = visibleImages();

        if (currentIndex > 0) {

            currentIndex--;

        }
        else {

            currentIndex =
                images.length - visible;

        }

        updateSlider();

    });


    setInterval(() => {

        next.click();

    }, Config.galleryInterval);


    window.addEventListener("resize", updateSlider);

}



/*====================================================
            INITIALIZE WEBSITE
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Logo

    const logo =
        document.getElementById("companyLogo");

    if (logo) {

        logo.src = Config.company.logo;

        logo.alt = Config.company.name;

    }

    initHeroSlider();

    initGallery();

});
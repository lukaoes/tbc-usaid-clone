// generate slider 
const slidesData = [
    [
        "./assets/images/partner-imgs/usaid-partner.png",
        "./assets/images/partner-imgs/space-partner.png",
        "./assets/images/partner-imgs/tnet-partner.png"
    ],
    [
        "./assets/images/partner-imgs/tegeta-partner.png",
        "./assets/images/partner-imgs/spectre-partner.png",
        "./assets/images/partner-imgs/tbc-partner.png"
    ],
    [
        "./assets/images/partner-imgs/ufc-partner.png"
    ]
];

function createSlide(images) {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";

    images.forEach((imageSrc) => {
        const imageDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = imageSrc;

        const imageName = imageSrc.split("/").pop().replace("-partner.png", "");
        img.alt = imageName

        imageDiv.appendChild(img);
        slideDiv.appendChild(imageDiv);
    });

    return slideDiv;
}

function generateSlides() {
    const slidesContainer = document.querySelector('.slides');

    slidesData.forEach((images, index) => {
        const slide = createSlide(images, index);
        slidesContainer.appendChild(slide);
    });
}

generateSlides();

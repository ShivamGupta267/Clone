

// let centerBars = document.querySelectorAll("#center-bar");

// centerBars.forEach(centerBar => {
//     centerBar.addEventListener("click", () => {
//         centerBar.classList.add("addClass");
//     });
// });


let slide = document.querySelectorAll(".back-img");
let count = 0;
const totalSlides = slide.length;

slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImg = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
}

const goRight = () => {
    if (count < totalSlides - 1) {
        count++;
        slideImg();
    }
}

const goLeft = () => {
    if (count > 0) {
        count--;
        slideImg();
    }
}

let slideItems = document.querySelectorAll(".slideitem"); // Select all slide items
let countItmes = 0; // Track current slide index
const totalSlidesItems = slide.length; // Total number of slides

// Initial positioning of each slide
slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Position each slide side-by-side
});

// Function to move slides based on the `count` value
const slideImgItems = () => {
    slide.forEach(slide => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
};

// Move to the next slide
const goRightItems = () => {
    if (count < totalSlides - 1) {
        count++;
        slideImg();
    }
};

// Move to the previous slide
const goLeftItems = () => {
    if (count > 0) {
        count--;
        slideImg();
    }
};

// Add event listeners to the left and right scroll buttons
document.querySelector("#right-scroll").addEventListener("click", goRight);
document.querySelector("#left-scroll").addEventListener("click", goLeft);




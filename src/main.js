const topBar = document.querySelector("#top-bar");
const exteriorColorSection = document.querySelector("#exterior-buttons");
const interiorColorSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonsSection = document.querySelector("#wheel-buttons");
let selectedColor = "Stealth Grey";
const selectedOptions = {
  "Perfomance Wheels": false,
  "Perfomance Package": false,
  "Full Self Driving": false,
};
// Handling topBar on scroll

// const handleScroll = () => {
//   const atTop = window.scrollY === 0;
//   topBar.classList.toggle("visible-bar", atTop);
//   topBar.classList.toggle("hidden-bar", !atTop);
// };

// Image Mapping
const exteriorImages = {
  "Stealth Grey": "/model-y-stealth-grey.jpg",
  "Pearl White": "/model-y-pearl-white.jpg",
  "Solid Black": "/model-y-solid-black.jpg",
  "Ultra Red": "/model-y-ultra-red.jpg",
  "Quick Silver": "/model-y-quicksilver.jpg",
  "Metallic Blue": "/model-y-deep-blue-metallic.jpg",
};

const interiorImages = {
  Light: "/model-y-interior-light.jpg",
  Dark: "/model-y-interior-dark.jpg",
};

// Handle Color Selection - both exterior & interior

const handleColorButtonClick = (event) => {
  let button;
  if (event.target.tagName === "IMG") {
    button = event.target.closest("BUTTON");
  } else if (event.target.tagName === "BUTTON") {
    button = event.target;
  }
  if (button) {
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
  }

  // Change Exterior Image
  if (event.currentTarget === exteriorColorSection) {
    const color = button.querySelector("img").alt;
    exteriorImage.src = exteriorImages[color];
  }
  // Change Interior Image

  if (event.currentTarget === interiorColorSection) {
    const color = button.querySelector("img").alt;
    interiorImage.src = interiorImages[color];
  }
  // console.log(event.target);
};

// Wheel Selection
const handleWheelButtonClick = (event) => {
  const button = event.target.closest("button");
  if (button) {
    const buttons = wheelButtonsSection.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.classList.remove("bg-gray-700", "text-white");
    });
    // Add selected styles to clicked button
    event.target.classList.add("bg-gray-700", "text-white");

    const selectedWheel = event.target.textContent.includes("Performance");
    exteriorImage.src = selectedWheel
      ? "/model-y-stealth-grey-performance.jpg"
      : "/model-y-stealth-grey.jpg";
  }
};

// Event Listeners

// window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener("click", handleColorButtonClick);
interiorColorSection.addEventListener("click", handleColorButtonClick);
wheelButtonsSection.addEventListener("click", handleWheelButtonClick);

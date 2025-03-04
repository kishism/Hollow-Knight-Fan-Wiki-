document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((slideshow, slideshowIndex) => {
    let currentSlideIndex = 0; // Independent slide index for this slideshow
    const slides = slideshow.querySelectorAll(".mySlides");
    const dotsContainer = slideshow.querySelector(".dot-container");

    // Function to show a specific slide
    function showSlide(index) {
      // Ensure the slide index wraps around properly
      currentSlideIndex = (index + slides.length) % slides.length;

      // Hide all slides and remove 'active' class from dots
      slides.forEach((slide) => (slide.style.display = "none"));
      const dots = dotsContainer?.querySelectorAll(".dot");
      dots?.forEach((dot) => dot.classList.remove("active"));

      // Display the current slide and highlight the corresponding dot
      slides[currentSlideIndex].style.display = "block";
      dots?.[currentSlideIndex]?.classList.add("active");
    }

    // Initialize the slideshow
    function initializeSlideshow() {
      // Display the first slide
      if (slides.length > 0) {
        showSlide(0);
      }

      // Create dots if they don't exist
      if (dotsContainer && slides.length > 1) {
        slides.forEach((_, index) => {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (index === 0) dot.classList.add("active"); // Highlight the first dot
          dot.addEventListener("click", () => showSlide(index));
          dotsContainer.appendChild(dot);
        });
      }

      // Attach event listeners for navigation buttons
      const prevButton = slideshow.querySelector(".prev");
      const nextButton = slideshow.querySelector(".next");

      prevButton?.addEventListener("click", () => showSlide(currentSlideIndex - 1));
      nextButton?.addEventListener("click", () => showSlide(currentSlideIndex + 1));
    }

    initializeSlideshow();
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // FAQ/Feature accordion logic (if needed on other pages)
    const items = document.querySelectorAll("#feature-list > div");
    if (items.length > 0) {
        items.forEach((item, i) => {
            item.addEventListener("click", () => {
                items.forEach(el => {
                    el.classList.remove("text-[#1c2b33]");
                    el.classList.add("text-gray-500");

                    const desc = el.querySelector(".desc");
                    if (desc) desc.classList.add("hidden");
                    const icon = el.querySelector(".icon");
                    if (icon) icon.src = "../public/icons/ic_plus.svg";
                });

                item.classList.add("text-[#1c2b33]");
                item.classList.remove("text-gray-500");

                const desc = item.querySelector(".desc");
                if (desc) desc.classList.remove("hidden");
                const icon = item.querySelector(".icon");
                if (icon) icon.src = "../public/icons/ic_apart.svg";
            });
        });
    }

    // Testimonial Slider logic
    const track = document.getElementById("testimonial-track");
    const prevBtn = document.getElementById("prev-feed");
    const nextBtn = document.getElementById("next-feed");
    const dotsContainer = document.getElementById("dots");

    if (track) {
        const slides = Array.from(track.children);
        const dots = dotsContainer ? Array.from(dotsContainer.children) : [];
        let currentIndex = 0;

        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.remove("bg-gray-300");
                    dot.classList.add("bg-gray-900");
                } else {
                    dot.classList.remove("bg-gray-900");
                    dot.classList.add("bg-gray-300");
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Initialize
        updateSlider();
    }
});

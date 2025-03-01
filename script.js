// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Get the modal
const modal = document.getElementById("certificate-modal");

// Get the image and insert it inside the modal
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

// Get all certificate images
const certificateImages = document.querySelectorAll(".certificate-img");

// Loop through all images and add click event listener
certificateImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt; // Use alt text as caption
    });
});

// Get the close button and close the modal when clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


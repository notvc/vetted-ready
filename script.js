const bannerContent = document.querySelector('.banner-content');
const logos = Array.from(bannerContent.children);
// Clone the logos to ensure enough width for a seamless loop on large screens
for (let i = 0; i < 11; i++) {
    logos.forEach(logo => bannerContent.appendChild(logo.cloneNode(true)));
}
const headers = document.querySelectorAll(".question-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    
    // Toggle the clicked item
    item.classList.toggle("active");
  });
});


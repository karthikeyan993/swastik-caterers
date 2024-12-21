import heroImage1 from "/images/hero-image-1.png?format=webp";
import heroImage2 from "/images/hero-image-2.png?format=webp";
import heroImage3 from "/images/hero-image-3.png?format=webp";

addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-image-1 img").src = heroImage1;
  document.querySelector(".hero-image-2 img").src = heroImage2;
  document.querySelector(".hero-image-3 img").src = heroImage3;
});

import heroImage1 from "/images/hero-image-1.png?format=webp";
import heroImage2 from "/images/hero-image-2.png?format=webp";
import heroImage3 from "/images/hero-image-3.png?format=webp";

import weddings from "/images/service-weddings.png?format=webp";
import corporateEvents from "/images/service-corporate-events.png?format=webp";
import specialOccasions from "/images/service-special-occasions.png?format=webp";
import birthdayParties from "/images/service-birthday-parties.png?format=webp";

addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-image-1 img").src = heroImage1;
  document.querySelector(".hero-image-2 img").src = heroImage2;
  document.querySelector(".hero-image-3 img").src = heroImage3;

  document.querySelector(".weddings img").src = weddings;
  document.querySelector(".corporate-events img").src = corporateEvents;
  document.querySelector(".special-occasions img").src = specialOccasions;
  document.querySelector(".birthday-parties img").src = birthdayParties;
});

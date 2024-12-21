addEventListener("DOMContentLoaded", () => {
  // Header
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => (document.querySelector("header").innerHTML = data))
    .catch((err) => console.log("error loading header"));

  //   fetch("/components/footer.html")
  //     .then((response) => response.text())
  //     .then((data) => (document.querySelector("footer").innerHTML = data))
  //     .catch((error) => console.error("Error loading footer:", error));
});

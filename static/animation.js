
// function myFunction() {
//   alert("Hello from a static file!");
// }

function slideOutAndNavigate(targetPage) {
  const content = document.getElementById("mainContent");

  // Add slide-up animation classes
  content.classList.add("transform", "-translate-y-full", "opacity-0");

  // Wait for the animation to complete before navigating
  content.addEventListener(
    "transitionend",
    () => {
      window.location.href = targetPage;
    },
    { once: true }
  );
}



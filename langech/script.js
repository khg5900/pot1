document.addEventListener("DOMContentLoaded", function () {
  const koButton = document.getElementById("koButton");
  const jaButton = document.getElementById("jaButton");
  const koContent = document.getElementById("ko");
  const jaContent = document.getElementById("ja");

  function changeLanguage(lang) {
    if (lang === "ko") {
      koContent.classList.remove("hidden");
      jaContent.classList.add("hidden");
    } else {
      koContent.classList.add("hidden");
      jaContent.classList.remove("hidden");
    }
  }

  koButton.addEventListener("click", function () {
    changeLanguage("ko");
  });

  jaButton.addEventListener("click", function () {
    changeLanguage("ja");
  });
});

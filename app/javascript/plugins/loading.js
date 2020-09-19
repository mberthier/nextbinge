const loadingFunction = () => {
  const submitButton = document.querySelector(".buttonsubmit-right")
  submitButton.addEventListener('click', function() {
    let body = document.querySelector("body")

    let texts = ["Crunching numbers",
      "Sipping coffee",
      "Preparing some stuff",
      "Your movies are coming!"]

    let index = 0;

    const newSentence = () => {
      document.querySelector(".sentence").innerHTML = texts[index];
      index < 3 ? index++ : index = 0;
    };

    if (body) {
      body.style.overflow = "hidden";
      body.insertAdjacentHTML("beforebegin", `<div class="background-holder"><div class="central-box"><div class="spin"><div class="loader"></div><br><h3 class="sentence">Activating algorithms</h3></div></div></div>`);
      setInterval(newSentence, 1000);
      setTimeout(function () {
        window.location.replace(redirect)
      }, 1500);
    };
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "none";
  });
};

export { loadingFunction };

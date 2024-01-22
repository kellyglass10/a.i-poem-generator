function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "A romance so sweet, a tale of two hearts; A love that never fades or falls apart",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

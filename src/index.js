function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "09ofabt96a856ac54d57c0bab329361b";
  let context =
    "You are a romantic poem expert and love to write short poems. You must generate a four line poem written on four seperate lines in HTML. The poem cannot be shorter than four lines. Do not include code instructions. Do not include a title to the poem. Make sure to follow the user instructions. Sign the poem `XOXO SheCodes AI 🤖` inside a <strong> element at the end of the poem";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

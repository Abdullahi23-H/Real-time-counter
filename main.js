const textArea = document.getElementById("text-input");
const charCounter = document.getElementById("char-count");
const updateFunc = () => {
  let text = textArea.value;
  let length = text.length;
  if (length > 50) {
    text = text.substring(0, 50);
    textArea.value = text;
    length = 50;
  }

  charCounter.textContent = `Character Count: ${length}/50`;

  if (length === 50) {
    charCounter.classList.add("limit-reached");
  } else {
    charCounter.classList.remove("limit-reached");
  }
};

textArea.addEventListener("input", updateFunc);

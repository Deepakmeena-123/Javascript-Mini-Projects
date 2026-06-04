const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

const uppercaseBtn = document.querySelector(".uppercase");
const lowercaseBtn = document.querySelector(".lowercase");
const capitalizeBtn = document.querySelector(".capitalize");

const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

const copyBtn = document.querySelector(".copy");
const clearBtn = document.querySelector(".clear");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

inputField.addEventListener("input", () => {
    outputField.textContent = inputField.value;

    charCount.textContent = inputField.value.length;

    const words = inputField.value.trim().split(/\s+/);

    wordCount.textContent =
        inputField.value.trim() === ""
        ? 0
        : words.length;

    localStorage.setItem("editorText", inputField.value);
});

window.addEventListener("load", () => {
    const savedText = localStorage.getItem("editorText");

    if(savedText){
        inputField.value = savedText;
        outputField.textContent = savedText;

        charCount.textContent = savedText.length;

        wordCount.textContent =
            savedText.trim() === ""
            ? 0
            : savedText.trim().split(/\s+/).length;
    }
});

uppercaseBtn.addEventListener("click", () => {
    outputField.textContent = inputField.value.toUpperCase();
});

lowercaseBtn.addEventListener("click", () => {
    outputField.textContent = inputField.value.toLowerCase();
});

capitalizeBtn.addEventListener("click", () => {

    const capitalized = inputField.value
        .toLowerCase()
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

    outputField.textContent = capitalized;
});

boldBtn.addEventListener("click", () => {
    outputField.style.fontWeight = "bold";
});

italicBtn.addEventListener("click", () => {
    outputField.style.fontStyle = "italic";
});

underlineBtn.addEventListener("click", () => {
    outputField.style.textDecoration = "underline";
});

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(outputField.textContent);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

clearBtn.addEventListener("click", () => {

    inputField.value = "";
    outputField.textContent = "Output Preview";

    wordCount.textContent = 0;
    charCount.textContent = 0;

    localStorage.removeItem("editorText");

    outputField.style.fontWeight = "normal";
    outputField.style.fontStyle = "normal";
    outputField.style.textDecoration = "none";
});
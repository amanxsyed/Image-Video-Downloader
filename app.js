// Declare variables for the input and button elements
const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

// Add an event listener to the button element
// on click of button fetch the file
downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});
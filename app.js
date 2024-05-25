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

// Fetch the file from the server
function fetchFile(url){
    fetch(url)
    .then(res => res.blob())
    .then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}
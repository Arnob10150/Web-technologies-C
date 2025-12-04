const textInput = document.getElementById("textInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultBox = document.getElementById("resultBox");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const reverseText = document.getElementById("reverseText");

analyzeBtn.addEventListener("click", analyzeText);

function analyzeText() 
{
    let text = textInput.value.trim();

    if (text === "") {
        resultBox.innerHTML = "<h3>Enter some text first!</h3>";
        return;
    }

    let charCountt = text.length;
    let words = text.split(" ");
    let wordCountt = words.length;    
    let reversedd = text.split("").reverse().join("");
    charCount.innerText= text.length;
    wordCount.innerText= wordCountt;
    reverseText.innerText= reversedd;
    
}

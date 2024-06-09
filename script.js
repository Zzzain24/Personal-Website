document.addEventListener("DOMContentLoaded", function() {
    const text = "Howdy, world!";
    const typingElement = document.querySelector(".typing-animation");
    typingElement.textContent = text;
});

function wrapCharsInSpan(element) {
    const text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        if (text[i] === " ") {
            span.innerHTML = "&nbsp;"; // Non-breaking space
        } else {
            span.innerText = text[i];
        }
        span.style.setProperty('--i', i);
        element.appendChild(span);
    }
}
    const header = document.getElementById('typingHeader');
    wrapCharsInSpan(header);
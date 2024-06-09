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

// scroll effect for experience section
const experiences = document.querySelectorAll('.experience');
function checkElementPosition() {
    experiences.forEach((experience) => {
        const rect = experience.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            experience.querySelector('.content').classList.add('visible');
        } else {
            experience.querySelector('.content').classList.remove('visible');
        }
    });
}
document.addEventListener('scroll', checkElementPosition);
document.addEventListener('DOMContentLoaded', checkElementPosition);
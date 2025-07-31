function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

const text = "Welcome to Funny Flix ✨";
let index = 0;

function typeWriter() {
  const target = document.getElementById("typewriter");
  const char = text.charAt(index);
  const emojiRegex = /[\u231A-\uD83E\uDDFF]/;

  if (index < text.length) {
    if (emojiRegex.test(char)) {
      target.innerHTML += `<span class="emoji">${char}</span>`;
    } else {
      target.innerHTML += char;
    }
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = () => {
  index = 0;
  document.getElementById("typewriter").innerHTML = "";
  typeWriter();
  AOS.init();
};

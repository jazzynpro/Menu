const container = document.querySelector('.sparkles');

for (let i = 0; i < 80; i++) {
  let star = document.createElement('span');

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (2 + Math.random() * 5) + "s";
  star.style.opacity = Math.random();

  container.appendChild(star);
}
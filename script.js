// const menuToggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector(".nav ul");

// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("show");
// });

const texte = document.querySelector(".txt p");
texte.innerHTML = texte.innerText
  .split("")
  .map((char, i) => {
    return `<span style='transform:rotate(${i * 9}deg)'>${char}</span>`;
  })
  .join("");

const typed = new Typed(".stack", {
  strings: ["<i>React</i> js.", " <i>Express</i> Js .", "<i>Mongo </i> Db"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

/*Efeito paralax*/
window.addEventListener("scroll", () => {
    document.querySelectorAll("section.imagem").forEach(sec => {
        const speed = 0.3; // Velocidade bem media
        const offset = window.pageYOffset * speed;
        sec.querySelector("::before"); // Compativel ao safari
        sec.style.setProperty("--mov", `${offset}px`);
        sec.style.transform = `translateY(0)`; 
        sec.style.setProperty("--offset", offset);
    });
});

// Aplicaçao do  movimento ao ::before introduzindo CSS
const css = document.createElement("style");
css.innerHTML = `
section.imagem::before {
    transform: translateY(calc(var(--offset) * -0.3));
}
`;
document.head.appendChild(css);

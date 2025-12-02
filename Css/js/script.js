// Parallax real 100% compatível
window.addEventListener("scroll", () => {
    document.querySelectorAll("section.imagem").forEach(sec => {
        const speed = 0.3; // Velocidade suave
        const offset = window.pageYOffset * speed;
        sec.querySelector("::before"); // Safari fix
        sec.style.setProperty("--mov", `${offset}px`);
        sec.style.transform = `translateY(0)`; 
        sec.style.setProperty("--offset", offset);
    });
});

// Aplicar movimento ao ::before via CSS
const css = document.createElement("style");
css.innerHTML = `
section.imagem::before {
    transform: translateY(calc(var(--offset) * -0.3));
}
`;
document.head.appendChild(css);

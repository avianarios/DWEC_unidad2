// dom.js
export function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    document.body.appendChild(p);
}

export function createHeading(level, text) {
    const heading = document.createElement(`h${level}`);
    heading.textContent = text;
    document.body.appendChild(heading);
}

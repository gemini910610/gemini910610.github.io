export class Element
{
    static create(tag, parent)
    {
        const element = document.createElement(tag);
        parent.appendChild(element);
        return element;
    }

    static find(css)
    {
        return document.querySelector(css);
    }
}

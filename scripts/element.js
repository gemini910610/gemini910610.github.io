export class Element
{
    static create(tag, parent, insert = false)
    {
        const element = document.createElement(tag);
        if (insert)
        {
            parent.prepend(element);
        }
        else
        {
            parent.appendChild(element);
        }
        return element;
    }

    static find(css)
    {
        return document.querySelector(css);
    }
}

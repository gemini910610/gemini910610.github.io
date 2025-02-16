import {Element} from './elements.js';

export class ActivityButton
{
    constructor(icon, tooltip, active = false)
    {
        this.icon = icon;
        this.tooltip = tooltip;
        this.active = active;
    }
    generate(parent)
    {
        const div = Element.create('div', parent);
        div.classList.add('tooltip', 'tip-right', 'icon24', this.icon);
        if (this.active)
        {
            div.classList.add('active');
        }
        div.setAttribute('tooltip', this.tooltip);
    }
}

export class Placeholder
{
    generate(parent)
    {
        const div = Element.create('div', parent);
        div.classList.add('placeholder');
    }
}

export class File
{
    constructor(filename, active = false)
    {
        this.filename = filename;
        this.active = active;
    }
    generate(parent)
    {
        const div = Element.create('div', parent);
        if (this.active)
        {
            div.classList.add('active');
        }
        const icon = Element.create('div', div);
        icon.classList.add('icon16', 'symbol-file');
        const span = Element.create('span', div);
        span.textContent = this.filename;
    }
}

export class Line
{
    constructor(content)
    {
        this.content = content;
    }
    generate(parent)
    {
        const li = Element.create('li', parent);
        li.textContent = this.content;
    }
}

export const generate = (widgets, parent) =>
{
    widgets.forEach(widget =>
    {
        widget.generate(parent);
    });
}

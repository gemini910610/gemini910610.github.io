import { Element } from './element.js';

export class ActivityButton
{
    constructor(icon, tooltip, callback, active = false)
    {
        this.icon = icon;
        this.tooltip = tooltip;
        this.callback = callback;
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

        div.addEventListener('click', this.callback);
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
    constructor(filename, callback, active = false)
    {
        this.filename = filename;
        this.callback = callback;
        this.active = active;
    }
    generate(parent)
    {
        const div = Element.create('div', parent);
        div.classList.add('file');
        if (this.active)
        {
            div.classList.add('active');
            this.callback();
        }

        const icon = Element.create('div', div);
        icon.classList.add('icon16', 'symbol-file');

        const span = Element.create('span', div);
        span.textContent = this.filename;

        div.addEventListener('click', this.callback);
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
        li.innerHTML = this.content;
    }
}

export class Extension
{
    constructor(title, description, date, callback, active = false, tooltip = null)
    {
        this.title = title;
        this.description = description;
        this.date = date;
        this.callback = callback;
        this.active = active;
        if (tooltip)
        {
            this.tooltip = tooltip;
        }
    }
    generate(parent)
    {
        const div = Element.create('div', parent);
        div.classList.add('tooltip', 'tip-right', 'extension');
        if (this.active)
        {
            div.classList.add('active');
        }
        const tooltip = this.tooltip || this.description;
        div.setAttribute('tooltip', tooltip);

        const title = Element.create('h5', div);
        title.classList.add('title');
        title.textContent = this.title;

        const description = Element.create('div', div);
        description.classList.add('description');
        description.textContent = this.description;

        const footer = Element.create('div', div);
        footer.classList.add('footer');

        const date = Element.create('h6', footer);
        date.classList.add('date');
        date.textContent = this.date;

        const icon = Element.create('div', footer);
        icon.classList.add('icon16', 'settings-gear');

        div.addEventListener('click', this.callback);
    }
}

export class SidebarHeader
{
    constructor(title)
    {
        this.title = title;
    }
    generate(parent)
    {
        const div = Element.create('div', parent, true);
        div.classList.add('header');

        const span = Element.create('span', div);
        span.textContent = this.title;

        const placeholder = Element.create('div', div);
        placeholder.classList.add('placeholder');

        const refresh = Element.create('div', div);
        refresh.classList.add('tooltip', 'tip-bottom', 'icon16', 'refresh');
        refresh.setAttribute('tooltip', 'refresh');
    }
}

export class Tab
{
    constructor(title)
    {
        this.title = title;
    }
    generate(parent)
    {
        const div = Element.create('div', parent, true);
        div.classList.add('tab');

        const icon = Element.create('div', div);
        icon.classList.add('icon16', 'symbol-file');

        const span = Element.create('span', div);
        span.textContent = this.title;
    }
}

export const generate = (widgets, parent) =>
{
    widgets.forEach(widget =>
    {
        widget.generate(parent);
    });
};

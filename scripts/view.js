import * as Widget from './widgets.js';
import { Element } from './element.js';

export const create_activity_bar = (active_icon) =>
{
    const top_icons = {
        'files': 'files',
        'extensions': 'extensions',
        'github-inverted': 'github',
        'remote-explorer': 'remote explorer',
        'json': 'json'
    };
    const bottom_icons = {
        'account': 'account',
        'settings-gear': 'settings'
    };

    const activity_bar = Element.find('.activity_bar');
    const top_buttons = Array.from(Object.entries(top_icons), ([icon, tooltip]) =>
    {
        return new Widget.ActivityButton(icon, tooltip, active_icon == icon);
    });
    const bottom_buttons = Array.from(Object.entries(bottom_icons), ([icon, tooltip]) =>
    {
        return new Widget.ActivityButton(icon, tooltip, active_icon == icon);
    });
    const activity_buttons = [
        ...top_buttons,
        new Widget.Placeholder(),
        ...bottom_buttons
    ];
    Widget.generate(activity_buttons, activity_bar);
}

export const create_primary_sidebar = (active_file) =>
{
    const files = [
        'index.html',
        'style.css',
        'script.js'
    ];

    const primary_sidebar = Element.find('.primary_sidebar');
    const file_widgets = Array.from(files, (file) =>
    {
        return new Widget.File(file, active_file == file);
    });
    Widget.generate(file_widgets, primary_sidebar);
}

export const create_editor_code = () =>
{
    const contents = [
        'content 1',
        'content 2',
        'content 3'
    ]

    const code = Element.find('.code');
    const lines = Array.from(contents, (content) =>
    {
        return new Widget.Line(content);
    });
    Widget.generate(lines, code);
}

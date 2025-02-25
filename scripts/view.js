import * as Widget from './widgets.js';
import { Element } from './element.js';
import * as FileLoader from './file_loader.js';

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
    const links = {
        'files': 'index.html',
        'extensions': 'extension.html'
    }

    const activity_bar = Element.find('.activity_bar');
    const top_buttons = Array.from(Object.entries(top_icons), ([icon, tooltip]) =>
    {
        return new Widget.ActivityButton(icon, tooltip, (event) =>
        {
            window.location.href = links[icon] ?? '';
        }, active_icon == icon);
    });
    const bottom_buttons = Array.from(Object.entries(bottom_icons), ([icon, tooltip]) =>
    {
        return new Widget.ActivityButton(icon, tooltip, (event) =>
        {
            window.location.href = links[icon] ?? '';
        }, active_icon == icon);
    });
    const activity_buttons = [
        ...top_buttons,
        new Widget.Placeholder(),
        ...bottom_buttons
    ];
    Widget.generate(activity_buttons, activity_bar);
};

export const create_sidebar_header = (title) =>
{
    const primary_sidebar = Element.find('.primary_sidebar');
    const header = new Widget.SidebarHeader(title);
    header.generate(primary_sidebar);
};

export const create_editor_code = (contents) =>
{
    const code = Element.find('.code');
    code.innerHTML = '';
    const lines = Array.from(contents, (content) =>
    {
        return new Widget.Line(content);
    });
    Widget.generate(lines, code);
};

export const create_file_sidebar = (active_file) =>
{
    const files = [
        'index.html',
        'start-server.bat'
    ];

    const primary_sidebar = Element.find('.primary_sidebar');
    const file_widgets = Array.from(files, (file) =>
    {
        return new Widget.File(file, (event) =>
        {
            if (event && !event.currentTarget.classList.contains('active'))
            {
                const active = Element.find('.file.active');
                active.classList.remove('active');
                event.currentTarget.classList.add('active');
            }

            let response = FileLoader.open(file);
            response = FileLoader.parse_html(response);
            const contents = response.split('\r\n');

            create_editor_code(contents);
        }, active_file == file);
    });
    Widget.generate(file_widgets, primary_sidebar);
};

export const create_extension_sidebar = (active_title) =>
{
    const extensions = [
        {
            'title': 'Python Debugger',
            'description': 'Python Debugger extension using debugpy',
            'date': '2025/2/17'
        },
        {
            'title': 'Auto Close Tag',
            'description': 'Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text',
            'date': '2025/2/17',
            'tooltip': 'Automatically add HTML/XML close tag,\nsame as Visual Studio IDE or Sublime Text'
        }
    ];

    const primary_sidebar = Element.find('.primary_sidebar');
    const extension_widgets = Array.from(extensions, (extension) =>
    {
        return new Widget.Extension(extension.title, extension.description, extension.date, (event) =>
        {
            if (event && !event.currentTarget.classList.contains('active'))
            {
                const active = Element.find('.extension.active');
                active.classList.remove('active');
                event.currentTarget.classList.add('active');
            }
        }, extension.title == active_title, extension.tooltip);
    });
    Widget.generate(extension_widgets, primary_sidebar);
};

export const create_tab = (title) =>
{
    const editor = Element.find('.editor');
    const tab = new Widget.Tab(title);
    tab.generate(editor);
};

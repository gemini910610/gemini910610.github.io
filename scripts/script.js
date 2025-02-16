import * as Widget from './widgets.js';
import {Element} from './elements.js';

const activity_bar = Element.find('.activity_bar');
const activity_buttons = [
    new Widget.ActivityButton('files', 'files', true),
    new Widget.ActivityButton('extensions', 'extensions'),
    new Widget.ActivityButton('github-inverted', 'github inverted'),
    new Widget.ActivityButton('remote-explorer', 'remote explorer'),
    new Widget.ActivityButton('json', 'json'),
    new Widget.Placeholder(),
    new Widget.ActivityButton('account', 'account'),
    new Widget.ActivityButton('settings-gear', 'settings gear')
];
Widget.generate(activity_buttons, activity_bar);

const primary_sidebar = Element.find('.primary_sidebar');
const files = [
    new Widget.File('index.html', true),
    new Widget.File('style.css'),
    new Widget.File('script.js')
];
Widget.generate(files, primary_sidebar);

const code = Element.find('.code');
const lines = [
    new Widget.Line('content 1'),
    new Widget.Line('content 2')
];
Widget.generate(lines, code);

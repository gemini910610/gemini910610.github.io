export const open = (file) =>
{
    const http = new XMLHttpRequest();
    http.open('GET', file, false);
    http.send();

    return http.response;
};

export const parse_html = (html) =>
{
    const tokens = {
        ' ': '&nbsp;',
        '<': '&lt;',
        '>': '&gt;',
    };

    for (const [key, value] of Object.entries(tokens))
    {
        html = html.replaceAll(key, value);
    }
    return html;
}

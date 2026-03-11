console.log('Loaded!');

// helper function
const el = (tag, { text, html, children = [] } = {}) => {
    const element = document.createElement(tag);

    if (text) element.innerText = text;
    if (html) element.innerHTML = html;

    children.forEach(child => element.append(child));

    return element;
};

const whatDefer = el('div', {
    children: [
        el('p', {
            html: `
Both the defer and async attributes are ways of telling the browser
that the linked script does not use document.write() to generate
HTML output, and that the browser can continue parsing while downloading the script.
`
        }),

        el('p', {
            html: `
The defer attribute causes the browser to defer execution of the script until after
the document has been fully loaded and parsed.
`
        }),

        el('p', {
            text: `
The async attribute causes the browser to run the script as soon as possible
without blocking HTML parsing. If both async and defer exist, async wins.
`
        }),

        el('strong', { text: 'Without defer:' }),

        el('pre', {
            html: 'HTML parsing ----STOP---- JS download + run ---- continue HTML'
        }),

        el('strong', { text: 'With defer:' }),

        el('pre', {
            text: `
HTML parsing ------------------------------ done
           JS download (parallel)
                               JS execute
`
        })

    ]
});

document.body.append(whatDefer);
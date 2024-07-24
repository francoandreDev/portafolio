# Portfolio

## About me

### About the features

- **Themes:** Themes are applied to the body via a custom attribute called `theme-name`. The values are defined in `Themes.js` and `styles.css` within the `themes` layer. A click event on the button is detected using an event listener in `main.js`.

- **Translations:** Translations are applied to elements with the custom attribute `translate-element`. The values are defined in `Translator.js` as a dictionary, where the first entry is the language and the second is the element ID to translate. A click event on the button is detected using an event listener in `main.js`.

- **Menu:** The open/closed logic for the menu icon is managed using JavaScript to detect click events on the menu element with an event listener in `main.js`. The related attribute, `menu-state`, can be either `open` or `close`. These states trigger specific behaviors when the user's device resolution is below 800px, handled by the stylesheet in the `menu` layer within the `styles.css` file.

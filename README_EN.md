# Arabic to HTML — Snippets for VS Code

Overview

`Arabic to HTML` provides Arabic-named snippets to accelerate writing HTML, CSS, JavaScript and SVG in Visual Studio Code. Use short Arabic prefixes (for example: `صفحة`, `صورة`, `زر`) to insert templates and edit placeholders.

Key features

- Arabic-language snippet prefixes and descriptions.
- Full HTML page template including `meta charset` and `viewport`.
- Accessibility-aware snippets (labels, roles, alt attributes).
- Reusable templates such as `template`, `details/summary`, `figure/figcaption`.
- Media snippets: `audio`, `video`, `picture`, `map/area`.
- RTL-friendly suggestions and examples.

Installation

1. Open Visual Studio Code.
2. Open Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for `Arabic to html` and click `Install`.

Or install from a local `.vsix` file:

```bash
# install local VSIX
code --install-extension path/to/arabictohtml-0.0.7.vsix
```

Usage

1. Open an HTML, CSS, JS, or SVG file in VS Code.
2. Type the Arabic snippet prefix (for example `صفحة`) and press `Tab` to expand.
3. Move through placeholders with `Tab` and replace placeholder content.

Customization

- Edit snippets in `snippets/snippets.code-snippets` to change prefixes, scopes or templates.
- After editing snippets, run `Developer: Reload Window` to reload snippets.
- You may add additional `scope` values to make snippets available in other file types (for example `javascript`, `php`, etc.).

Examples

HTML — full page (type `صفحة`):

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Page</title>
</head>
<body>
  <!-- content -->
</body>
</html>
```

CSS — color snippet (type `لون احمر`):

```css
color: red;
```

JavaScript — script tag (type `جافا سكريبت`):

```html
<script type="text/javascript">
  // JavaScript code here
</script>
```

SVG — circle (type `دائرة`):

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

Accessibility and RTL

- Use `alt` attributes for images and `aria-*` where appropriate. Snippets include labels and roles for better assistive technology support.
- When writing Arabic content, set `lang="ar"` and consider RTL layout for styles.

Command-line / VSIX

<!-- English README translated from the project's primary README -->
<div align="center">

# 🌐 ArabicToHtml — Arabic snippets for VS Code

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.8-blue?style=for-the-badge&logo=visual-studio-code)
![VS Code](https://img.shields.io/badge/VS%20Code-1.0.0+-green?style=for-the-badge&logo=visual-studio-code)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensource)

</div>

This file is the English translation of the extension README. It provides a concise description, installation steps, examples for HTML/CSS/JS/SVG snippets, and instructions for customizing snippets.

</div>

---

## ✨ Overview

`Arabic to HTML` is a snippet collection that speeds up writing HTML and related markup using Arabic-named prefixes inside Visual Studio Code. The extension includes full page templates, semantic elements, media tags, and ready-made snippets for HTML, CSS, JavaScript and SVG.

## 🚀 Key features

- Arabic-named snippet prefixes (for example: `صفحة`, `صورة`, `زر`).
- Full HTML page templates including `meta charset` and `viewport`.
- Accessibility-minded snippets (labels, roles, `alt` attributes).
- Reusable templates such as `template`, `details/summary`, and `figure/figcaption`.
- Media examples: `audio`, `video`, `picture`, `map/area`.
- RTL-friendly suggestions and examples for Arabic content.

---

## 📥 Installation

1. Open Visual Studio Code.
2. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for `Arabic to html` and click `Install`, or install from a `.vsix` file.

To install from a local VSIX:

```bash
# install local VSIX (replace version accordingly)
code --install-extension path/to/arabictohtml-0.0.8.vsix
```

---

## ⌨️ How to use the snippets

1. Open an HTML, CSS, JS or SVG file in VS Code.
2. Type the Arabic snippet prefix (for example `صفحة`) and press `Tab` to expand.
3. Navigate placeholders with `Tab` and replace the values as needed.

Example: type `صفحة` and press `Tab` to insert a full HTML page template.

---

## Quick examples (snippet samples)

HTML — full page (type `صفحة`):

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Page</title>
</head>
<body>
  <!-- content here -->
</body>
</html>
```

CSS — color snippet (type `لون احمر`):

```css
color: red;
```

JavaScript — script tag (type `جافا سكريبت`):

```html
<script type="text/javascript">
  // JavaScript code here
</script>
```

SVG — circle (type `دائرة`):

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---

## New snippets in v0.0.8

The following new snippet prefixes were added in v0.0.8 (English and Arabic variants included in the extension). Type the prefix in an HTML/CSS/JS file and press <kbd>Tab</kbd> to expand.

- CSS
  - `vars` — define CSS custom properties (variables)
  - `reset` — minimal CSS reset/normalize
  - `flex` — flex container utilities
  - `grid` — responsive grid layout with breakpoint
  - `keyframes` — keyframes and animation class
  - `btn` — primary button styles

- HTML
  - `link-css` — link to external stylesheet
  - `script` — include external script with `defer`
  - `input-attrs` — input with common attributes (placeholder, required)
  - `aria-btn` — accessible button with ARIA attributes
  - `data-attr` — element with `data-*` attribute for JS hooks
  - `meta-robots` — meta robots tag example

- JavaScript
  - `on` — add an event listener to an element
  - `fetch` — async/await fetch wrapper with error handling
  - `debounce` — debounce utility for input/resize handlers
  - `domready` — `DOMContentLoaded` initializer
  - `ls` — simple `localStorage` save/load helpers
  - `delegate` — event delegation helper

Examples

Type `vars` then <kbd>Tab</kbd> to insert CSS variables template. Type `on` then <kbd>Tab</kbd> to insert an event listener skeleton.

```html
<!-- Example: link stylesheet -->
<link rel="stylesheet" href="styles.css">

<!-- Example: include deferred script -->
<script src="app.js" defer></script>
```

These snippets are available in both `snippets/snippets.code-snippets` and `snippets/snippets_en.code-snippets`.

## Quality and organization improvements

- Fixed snippets with unclosed tags.
- Improved the search snippet to be accessible (`role="search"`) with hidden labels for screen readers.
- Added more semantic snippets: `details`, `template`, `figure/figcaption`, `time`, `data`, and more.

---

## ✅ New in this release

- RTL support and automatic layout considerations for Arabic content.
- Accessibility improvements for many snippets (labels, roles, alt text).
- Reusable templates: `template`, `details/summary`, `figure/figcaption`.
- Expanded media snippets: `audio`, `video`, `picture`, `map/area`.
- Snippets are customizable via `snippets/snippets.code-snippets`.

---

## Detailed instructions

### 1) Install

- From inside VS Code: open `Extensions`, search for `Arabic to html` and click `Install`.
- Or download the `arabictohtml-<version>.vsix` release and install via `Extensions: Install from VSIX`.

### 2) Customize snippets

- Open `snippets/snippets.code-snippets` to view and edit all snippets.
- After editing, save the file and run `Developer: Reload Window` (`Ctrl/Cmd+Shift+P`) to reload snippets.

Tips:
- You can change the Arabic `prefix` or add additional `scope` entries (for example `javascript` or `php`).
- Keep the file as valid JSON — ensure brackets and commas are correct.

### 3) Command-line / VSIX usage

```bash
# install from file
code --install-extension arabictohtml-0.0.7.vsix

# uninstall
code --uninstall-extension arabictohtml
```

### 4) Best practices

- Always provide `aria-*` and `alt` attributes when inserting media.
- When building forms, connect `label` to `input` using `for` and `id` for better accessibility.

### 5) Troubleshooting

- If a snippet doesn't appear after editing: ensure the snippet's `scope` matches the file type (e.g., `html`) and reload the window.
- For JSON errors opening `snippets/snippets.code-snippets`, use a JSON linter or VS Code diagnostics to find the issue.

---

## How to contribute

- To add new snippets, edit `snippets/snippets.code-snippets` and submit a pull request.
- Report issues or feature requests at: https://github.com/almhajer/ArabicToHtml/issues

---

## Changelog

- v0.0.8: added CSS/JS/HTML snippets, translated placeholders and choice lists, removed unused files, updated docs.
- v0.0.7: fixed snippet issues, added semantic elements, improved README and added search-related snippets.

---

## Contribution

Contributions are welcome — open an issue or submit a pull request. See `CONTRIBUTING.md` if present.

---

## License

MIT — see `LICENSE.txt` for details.

---

For the complete list of snippets open `snippets/snippets.code-snippets` in the repository.

<!-- Note: the rest of the README contains the complete snippet list (kept in the original language/prefixes). -->


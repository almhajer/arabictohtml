# ArabicToHtml (AR/EN)

A VS Code snippet extension for **HTML + CSS + JavaScript** with bilingual Arabic/English triggers.

## What's new in 0.1.0

- Added a **complete HTML tag set** as bilingual snippets (141 tags).
- Added a broad **CSS property set** as bilingual snippets (526 properties).
- Added practical bilingual JavaScript snippets.
- Added generator-based maintenance for snippet files.
- Rewrote documentation with full reference files in `docs/`.
- Expanded snippet contribution languages in `package.json` to: `html`, `css`, `javascript`, `typescript`.

## Data sources

Web references and official docs used:

- MDN HTML elements reference:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- MDN CSS reference:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- MDN JavaScript reference:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- VS Code built-in CSS language data (from local VS Code installation)

## New reference files

- [docs/html-tags-bilingual.md](docs/html-tags-bilingual.md)
- [docs/css-properties-bilingual.md](docs/css-properties-bilingual.md)
- [docs/javascript-reference-bilingual.md](docs/javascript-reference-bilingual.md)

## Snippet files

- [snippets/snippets.code-snippets](snippets/snippets.code-snippets) (Arabic-first)
- [snippets/snippets_en.code-snippets](snippets/snippets_en.code-snippets) (English-first)

## Quick Prefix Examples

### HTML

- `صفحة` or `html page`
- `وسم div` or `tag div`
- `وسم img` or `tag img`

### CSS

- `خاصية color` or `property color`
- `خاصية grid-template-columns` or `property grid-template-columns`
- `متغيرات css` or `css vars`

### JavaScript

- `مستمع حدث` or `js event listener`
- `جلب بيانات` or `js fetch async`
- `مرجع جافاسكربت` or `javascript quick reference`

## Installation

1. Open VS Code.
2. Open `Extensions`.
3. Search for `ArabicToHtml` and install.

Or from VSIX:

```bash
code --install-extension arabictohtml-0.1.0.vsix
```

## Development & Regeneration

A generator script is now included:

```bash
node scripts/generate-snippets.js
```

This regenerates:

- Arabic and English snippet files.
- Reference docs in `docs/`.

## Notes

- Some HTML tags are deprecated/experimental; they are included for completeness.
- Some CSS properties are modern/experimental depending on browser support.

## License

MIT — see [LICENSE.txt](LICENSE.txt)

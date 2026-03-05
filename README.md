# ArabicToHtml (AR/EN)

إضافة VS Code لتوليد سنابيتات **HTML + CSS + JavaScript** بالعربي والإنجليزي.

## ما الجديد في الإصدار 0.1.0

- إضافة **قائمة عناصر HTML كاملة** (141 عنصرًا) كسنابيتات ثنائية اللغة.
- إضافة **خصائص CSS واسعة** (526 خاصية) كسنابيتات ثنائية اللغة.
- إضافة سنابيتات JavaScript عملية بالعربي والإنجليزي.
- تحسين بنية المشروع عبر سكربت توليد تلقائي للسنابيتات.
- تحديث التوثيق بشكل شامل مع مراجع مستقلة داخل مجلد `docs/`.
- توسيع التفعيل داخل `package.json` ليشمل: `html`, `css`, `javascript`, `typescript`.

## مصادر البيانات

تم الاعتماد على مصادر ويب موثوقة (MDN) بالإضافة إلى بيانات محرك VS Code الداخلية:

- MDN HTML elements reference:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- MDN CSS reference:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- MDN JavaScript reference:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- VS Code built-in CSS language data (داخل تثبيت VS Code محليًا)

## الملفات المرجعية الجديدة

- [docs/html-tags-bilingual.md](docs/html-tags-bilingual.md)
- [docs/css-properties-bilingual.md](docs/css-properties-bilingual.md)
- [docs/javascript-reference-bilingual.md](docs/javascript-reference-bilingual.md)

## ملفات السنابيتات

- [snippets/snippets.code-snippets](snippets/snippets.code-snippets) (Arabic-first)
- [snippets/snippets_en.code-snippets](snippets/snippets_en.code-snippets) (English-first)

## أمثلة Prefix سريعة

### HTML

- `صفحة` أو `html page`
- `وسم div` أو `tag div`
- `وسم img` أو `tag img`

### CSS

- `خاصية color` أو `property color`
- `خاصية grid-template-columns` أو `property grid-template-columns`
- `متغيرات css` أو `css vars`

### JavaScript

- `مستمع حدث` أو `js event listener`
- `جلب بيانات` أو `js fetch async`
- `مرجع جافاسكربت` أو `javascript quick reference`

## التثبيت

1. افتح VS Code.
2. افتح `Extensions`.
3. ابحث عن `ArabicToHtml` ثم ثبّت الإضافة.

أو عبر VSIX:

```bash
code --install-extension arabictohtml-0.1.0.vsix
```

## التطوير والتوليد

تمت إضافة سكربت توليد:

```bash
node scripts/generate-snippets.js
```

هذا الأمر يعيد توليد:

- ملفات السنابيتات العربية والإنجليزية.
- ملفات التوثيق المرجعية داخل `docs/`.

## ملاحظات

- بعض عناصر HTML قد تكون deprecated أو experimental، لكنها مضافة لأن الهدف توفير مرجع شامل.
- بعض خصائص CSS قد تكون حديثة/تجريبية حسب المتصفح.

## الرخصة

MIT — راجع [LICENSE.txt](LICENSE.txt)

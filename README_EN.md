<div align="center">

# 🌐 ArabicToHtml for VS Code

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue?style=for-the-badge&logo=visual-studio-code)
![VS Code](https://img.shields.io/badge/VS%20Code-1.98.0%2B-green?style=for-the-badge&logo=visual-studio-code)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensourceinitiative)](LICENSE.txt)

</div>

### Bilingual Arabic/English snippets for HTML, CSS, and JavaScript in VS Code

<div align="center">

![ArabicToHtml Icon](arabictohtml.png)

</div>

</div>

---

## 📋 Table of Contents

<div align="center">

| Section | Description |
|:------:|:------------|
| [🌟 Overview](#-overview) | Core idea and purpose |
| [✨ Features](#-features) | Main capabilities |
| [📚 Docs Files](#-docs-files) | Direct links to HTML/CSS/JS docs |
| [📦 Snippet Files](#-snippet-files) | Actual snippet source files |
| [🚀 Quick Prefix Examples](#-quick-prefix-examples) | Ready-to-use examples |
| [📥 Installation](#-installation) | Marketplace or VSIX |
| [⚙️ Development & Generation](#️-development--generation) | Snippet generation workflow |
| [🔗 Data Sources](#-data-sources) | Official references |
| [🤝 Contributing](#-contributing) | How to contribute |
| [📄 License](#-license) | Licensing details |

</div>

---

<div align="center">

# 🌟 Overview

<div style="background: linear-gradient(135deg, #0f4c81 0%, #3a7bd5 100%); padding: 22px; border-radius: 12px; color: white;">

> **ArabicToHtml** is a VS Code extension that provides practical bilingual snippets to speed up writing HTML, CSS, and JavaScript without memorizing full syntax for each element/property.

</div>

</div>

<div align="center">

| Benefit | Details |
|:------:|:--------|
| ⚡ | Faster writing using Arabic or English prefixes |
| 🎯 | Focused on real daily front-end workflows |
| 🌍 | Ideal for Arabic-speaking and bilingual teams |
| 🧩 | Broad coverage of tags, properties, and common patterns |

</div>

---

<div align="center">

# ✨ Features

</div>

### 1️⃣ Comprehensive HTML

<div align="center">

| Item |
|:-----|
| ✅ 141+ HTML tags as snippets |
| ✅ Arabic and English trigger prefixes |
| ✅ Coverage for common and advanced tags |

</div>

### 2️⃣ Broad CSS Coverage

<div align="center">

| Item |
|:-----|
| ✅ 526+ CSS properties |
| ✅ Bilingual Arabic/English prefixes |
| ✅ Layout, typography, color, and animation properties |

</div>

### 3️⃣ Practical JavaScript

<div align="center">

| Item |
|:-----|
| ✅ Everyday JavaScript snippet set |
| ✅ Event, fetch, and control-flow oriented snippets |
| ✅ Arabic and English triggers for the same actions |

</div>

---

<div align="center">

# 📚 Docs Files

</div>

<div align="center">

| File | Description |
|:----:|:------------|
| [docs/html-tags-bilingual.md](docs/html-tags-bilingual.md) | Bilingual HTML tags reference |
| [docs/css-properties-bilingual.md](docs/css-properties-bilingual.md) | Bilingual CSS properties reference |
| [docs/javascript-reference-bilingual.md](docs/javascript-reference-bilingual.md) | Practical bilingual JavaScript reference |

</div>

---

<div align="center">

# 📦 Snippet Files

</div>

<div align="center">

| File | Type |
|:----:|:-----|
| [snippets/snippets.code-snippets](snippets/snippets.code-snippets) | Arabic-first |
| [snippets/snippets_en.code-snippets](snippets/snippets_en.code-snippets) | English-first |

</div>

---

<div align="center">

# 🚀 Quick Prefix Examples

</div>

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

---

<div align="center">

# 📥 Installation

</div>

### From VS Code Marketplace

1. Open VS Code.
2. Open `Extensions`.
3. Search for `ArabicToHtml`.
4. Click Install.

### Via VSIX

```bash
code --install-extension arabictohtml-0.1.0.vsix
```

---

<div align="center">

# ⚙️ Development & Generation

</div>

```bash
node scripts/generate-snippets.js
```

This command regenerates:

- Arabic and English snippet files.
- Reference documentation files in `docs/`.

---

<div align="center">

# 🔗 Data Sources

</div>

- MDN HTML Elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- MDN CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- MDN JavaScript Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- VS Code built-in CSS language data

---

<div align="center">

# 🤝 Contributing

</div>

- Report an issue: https://github.com/almhajer/arabictohtml/issues
- Open a pull request: https://github.com/almhajer/arabictohtml/pulls

---

<div align="center">

# 📄 License

MIT — see [LICENSE.txt](LICENSE.txt)

</div>

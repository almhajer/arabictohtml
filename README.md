<div align="center">

# 🌐 Arabic to HTML — Arabic snippets for VS Code

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.8-blue?style=for-the-badge&logo=visual-studio-code)
![VS Code](https://img.shields.io/badge/VS%20Code-1.0.0+-green?style=for-the-badge&logo=visual-studio-code)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensource)

</div>

النسخة المحسّنة من دليل الإضافة: وصف مبسّط، تعليمات التثبيت، أمثلة عملية لكل أنواع الكود (HTML, CSS, JS, SVG) وتعليمات استخدام السنابيتات بالعربية.

</div>

---

## ✨ نظرة عامة

`Arabic to HTML` هي حزمة سنابيتات تسرّع كتابة عناصر HTML وسماته باللغة العربية داخل Visual Studio Code. تحتوي الإضافة على قوالب جاهزة لصفحات كاملة، عناصر دلالية، إدخالات ملفات، وسوم وسائط، بالإضافة إلى مقتطفات CSS وJS وSVG.

## 🚀 المميزات الرئيسية

- سنابيتات مُسماة بالعربية (مثل: صفحة، عنوان الصفحة، صورة، زر)
- قوالب صفحة HTML جاهزة مع `meta charset` و`viewport`
- دعم لأغراض الوصول (accessibility) وحسّننا وسم البحث ووسوم الـlabel
- أمثلة جاهزة للـ HTML، CSS، JavaScript وSVG
- تعليمات استخدام واضحة مع أمثلة لتسريع العمل

---

## 📥 التثبيت

1. افتح Visual Studio Code
2. انتقل إلى الامتدادات (`Ctrl+Shift+X` أو `Cmd+Shift+X` على macOS)
3. ابحث عن `Arabic to html` ثم اضغط `Install` أو قم بتثبيت من ملف `.vsix`

---

## ⌨️ كيفية استخدام السنابيتات

1. افتح ملف HTML أو CSS أو JS داخل VS Code
2. ابدأ بكتابة الأمر/الـ`prefix` بالعربية (مثال: `صفحة`)
3. اضغط `Tab` أو `Enter` لإدراج السنابيت
4. عدّل الوسائط أو الأماكن المخصصة `${1}` حسب الحاجة

مثال: لإنشاء صفحة HTML جديدة اكتب `صفحة` ثم اضغط `Tab` — ستُنشىء القالب الكامل للصفحة.

---

## أمثلة سريعة (مقتطفات من السنابيتات)

HTML — قالب صفحة سريعة (أدخل `صفحة`):

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>صفحة جديدة</title>
</head>
<body>
  <!-- المحتوى هنا -->
</body>
</html>
```

CSS — تغيير لون (أدخل `لون احمر` مثلاً):

```css
color: red;
```

JavaScript — وسم سكربت (أدخل `جافا سكريبت`):

```html
<script type="text/javascript">
  // اكتب كود JavaScript هنا
</script>
```

SVG — دائرة بسيطة (أدخل `دائرة`):

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---

## تحسينات الجودة والتنظيم

- أصلحنا سنابيتات بها أخطاء إغلاق الوسوم
- حسنّا وسم البحث ليكون صالحًا/قابل للوصول `role="search"` و`label` مخفيًا للقرّاء الشاشة
- أضفنا عناصر دلالية ومقتطفات: `details`, `template`, `figure/figcaption`, `time`, `data` وغيرها

---

## ✅ مميزات جديدة (التي أُضيفت في هذه النسخة)

- دعم RTL وتهيئة تلقائية لعناصر الـ HTML المكتوبة بالعربية.
- سنابيتات محسّنة للـ Accessibility (وسوم `label`, `role`, وسمع نصوص بديلة عند الحاجة).
- قوالب قابلة لإعادة الاستخدام: `template`, `details/summary`, `figure/figcaption`.
- تحسين سنابيت البحث والبحث المحسن عبر `role="search"` وعناوين مخفية للقراء الشاشة.
- أمثلة أكثر تغطية لأنواع الوسائط: `audio`, `video`, `picture`, `map/area`.
- إمكانية تخصيص السنابيتات عبر تحرير ملف `snippets/snippets.code-snippets` وإعادة تحميل النافذة.

---

## ℹ️ تعليمات شاملة (تفصيلية)

### 1) تثبيت

- من داخل VS Code: افتح `Extensions` وابحث عن `Arabic to html` ثم اضغط `Install`.
- أو نزّل ملف `arabictohtml-<version>.vsix` من صفحة الإصدارات أو من المستودع وثبّته عبر `Extensions: Install from VSIX`.

### 2) توسيع/تخصيص السنابيتات

- لعرض وتعديل كل السنابيتات افتح الملف: [snippets/snippets.code-snippets](snippets/snippets.code-snippets).
- بعد تعديل أي سنابيت احفظ الملف ثم نفّذ `Developer: Reload Window` من لوحة الأوامر (`Ctrl/Cmd+Shift+P`).

نصائح للتخصيص:
- يمكنك تغيير `prefix` بالعربي أو إضافة `scope` آخر مثل `javascript` أو `php` إذا أردت توسيع الاستخدام.
- حافظ على تنسيق JSON داخل الملف — تأكد من إقفال الأقواس والأقواس المربعة.

### 3) استخدام من سطر الأوامر (تثبيت VSIX)

```bash
# تثبيت ملف VSIX محليًا
code --install-extension path/to/arabictohtml-0.0.8.vsix

# لإزالة
code --uninstall-extension arabictohtml
```

### 4) أفضل الممارسات

- استخدم `aria-*` و`alt` للنص البديل دائمًا عند إدراج وسائط.
- عند إنشاء نماذج، اربط `label` بـ`input` عبر `for` و`id` لتحسين الوصول.

### 5) استكشاف الأخطاء وإصلاحها

- ان لم يظهر السنابيت بعد التعديل: تأكد من أن `scope` يطابق نوع الملف (مثلاً `html`) ثم نفّذ `Reload Window`.
- إذا حصلت على خطأ JSON عند فتح الملف، استخدم أداة فحص JSON أو محرر VS Code لعرض الأخطاء.

---

## كيفية المساهمة (موجز)

- إن أردت إضافة سنابيتات جديدة: افتح `snippets/snippets.code-snippets` وأضف كائن سنابيت جديد، ثم أرسل Pull Request.
- للمشكلات والأخطاء افتح Issue على: https://github.com/almhajer/ArabicToHtml/issues

---

## سجل التغييرات

- v0.0.8: إصلاح سنابيتات، إضافة عناصر جديدة، تحسين README، إضافة مفاتيح بحث.


---

## المساهمة

المساهمات مرحّب بها — افتح issue أو أرسل pull request. راجع ملف `CONTRIBUTING.md` إن وُجد.

---

## الرخصة

MIT — راجع `LICENSE.txt` للمزيد.

---

لمعرفة قائمة السنابيتات الكاملة، افتح [snippets/snippets.code-snippets](snippets/snippets.code-snippets) في المشروع.

### 43. قائمة
#### الأمر: `قائمة`
```html
<menu>
    <li>${1:العنصر الأول}</li>
    <li>${2:العنصر الثاني}</li>
</menu>
```

---

### 44. عنصر قائمة
#### الأمر: `عنصر قائمة`
```html
<li>${1:العنصر}</li>
```

---

### 45. صور بحسب مقاس المحدد
#### الأمر: `صور بحسب مقاس المحدد`
```html
<picture>
    <source srcset="${1:example-large.jpg}" media="(min-width: ${2:800px})">
    <source srcset="${3:example-medium.jpg}" media="(min-width: ${4:400px})">
    <img src="${5:example-small.jpg}" alt="${6:وصف الصورة}">
</picture>
```

---

### 46. زر إدخال صورة
#### الأمر: `زر إدخال صورة`
```html
<input type="file" id="${1:poster}" name="${2:poster}" accept="${3:image/png, image/jpeg}" />
```

---

### 47. زر إدخال ملف PDF
#### الأمر: `زر إدخال ملف PDF`
```html
<input type="file" id="${1:pdfFile}" name="${2:pdfFile}" accept="${3:application/pdf}" />
```

---

### 48. قائمة تعريفات
#### الأمر: `قائمة تعريفات`
```html
<dl>
  <dt>${1:العنوان}</dt>
  <dd>${2:الوصف}</dd>
</dl>
```

---

### 49. نص مائل
#### الأمر: `نص مائل`
```html
<em>${1:نص مائل هنا}</em>
```

---

### 50. نص يتوسطه خط
#### الأمر: `نص يتوسطه خط`
```html
<del>${1:النص}</del>
```

---

### 51. نص مسطر
#### الأمر: `نص مسطر`
```html
<ins>${1:النص المضاف}</ins>
```

---

### 52. قالب نموذج شخصي
#### الأمر: `قالب نموذج شخصي`
```html
<form action="${1:/action_page.php}" method="${2:post}">
 <fieldset>
  <legend>${3:Personalia}:</legend>
  <label for="fname">${4:First name}:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">${5:Last name}:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">${6:Email}:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="birthday">${7:Birthday}:</label>
  <input type="date" id="birthday" name="birthday"><br><br>
  <input type="submit" value="${8:Submit}">
 </fieldset>
</form>
```

---

### 53. حقل تاريخ
#### الأمر: `حقل تاريخ`
```html
<input type="date" id="${1:birthday}" name="${2:birthday}" />
```

---

### 54. قائمة شريط تنقل
#### الأمر: `قائمة شريط تنقل`
```html
<nav>
  <a href="${1:/html/}">${2:الرابط الأول}</a>
  <a href="${3:/css/}">${4:الرابط الثاني}</a>
</nav>
```
#### الوصف:
إضافة قائمة تنقل تحتوي على روابط متعددة.

---

### 55. خريطة صورة
#### الأمر: `خريطة صورة`
```html
<img src="${1:workplace.jpg}" alt="${2:Workplace}" usemap="#${3:workmap}" width="${4:400}" height="${5:379}">
<map name="${3:workmap}">
  <area shape="rect" coords="${6:34,44,270,350}" alt="${7:Computer}" href="${8:computer.htm}">
  <area shape="rect" coords="${9:290,172,333,250}" alt="${10:Phone}" href="${11:phone.htm}">
  <area shape="circle" coords="${12:337,300,44}" alt="${13:Cup of coffee}" href="${14:coffee.htm}">
</map>
```
#### الوصف:
إضافة خريطة صورة مع مناطق تفاعلية باستخدام العناصر `<map>` و `<area>`.

---

### 56. شريط نسبة التقدم
#### الأمر: `شريط نسبة التقدم`
```html
<label for="${1:file}">${2:وصف التقدم}:</label>
<progress id="${1:file}" value="${3:القيمة الحالية}" max="${4:القيمة القصوى}">${5:النسبة المئوية}</progress>
```
#### الوصف:
إضافة شريط تقدم (progress) مع وسم label.

---

### 57. مقياس نسبة
#### الأمر: `مقياس نسبة`
```html
<meter id="${1:meterId}" value="${2:القيمة الحالية}" min="${3:القيمة الدنيا}" max="${4:القيمة القصوى}">${5:الوصف هنا}</meter>
```

---

### 58. نص مشطوب
#### الأمر: `نص مشطوب`
```html
<s>${1:النص المشطوب}</s>
```
#### الوصف:
إضافة نص مشطوب باستخدام العنصر `<s>`.

---

### 59. نموذج بحث
#### الأمر: `نموذج بحث`
```html
<search>
  <form>
    <input name="${1:fsrch}" id="${2:fsrch}" placeholder="${3:Search here}" />
  </form>
</search>
```
#### الوصف:
إضافة عنصر بحث يحتوي على نموذج إدخال.

---

### 60. دائرة
#### الأمر: `دائرة`
```html
<svg width="${1:100}" height="${2:100}">
  <circle cx="${3:50}" cy="${4:50}" r="${5:40}" stroke="${6:green}" stroke-width="${7:4}" fill="${8:yellow}" />
</svg>
```
#### الوصف:
إضافة عنصر SVG يحتوي على دائرة.

---

### 61. مربع
#### الأمر: `مربع`
```html
<svg width="${1:100}" height="${2:100}">
  <rect x="${3:10}" y="${4:10}" width="${5:80}" height="${6:80}" stroke="${7:blue}" stroke-width="${8:4}" fill="${9:red}" />
</svg>
```
#### الوصف:
إضافة عنصر SVG يحتوي على مربع.

---

### 62. مثلث
#### الأمر: `مثلث`
```html
<svg width="${1:100}" height="${2:100}">
  <polygon points="${3:50,15} ${4:90,85} ${5:10,85}" stroke="${6:black}" stroke-width="${7:2}" fill="${8:blue}" />
</svg>
```
#### الوصف:
إضافة عنصر SVG يحتوي على مثلث.

---

### 63. إطار مضمّن
#### الأمر: `إطار مضمّن`
```html
<iframe src="${1:https://www.example.com}" width="${2:600}" height="${3:400}" frameborder="${4:0}" allowfullscreen></iframe>
```
#### الوصف:
إضافة عنصر iframe لعرض محتوى مضمّن.

---

### 64. عنصر مضمّن
#### الأمر: `عنصر مضمّن`
```html
<embed type="${1:image/jpg}" src="${2:pic_trulli.jpg}" width="${3:300}" height="${4:200}" />
```
#### الوصف:
إضافة عنصر embed لعرض محتوى مضمّن مثل صورة أو ملف.

---

### 65. عنصر إخراج
#### الأمر: `عنصر إخراج`
```html
<form oninput="${1:x.value=parseInt(a.value)+parseInt(b.value)}">
  <input type="range" id="${2:a}" value="${3:50}">
  +<input type="number" id="${4:b}" value="${5:25}">
  =<output name="${6:x}" for="${7:a b}"></output>
</form>
```
#### الوصف:
إضافة عنصر output مع نموذج إدخال لإجراء العمليات الحسابية.

---

### 66. اقتباس قصير
#### الأمر: `اقتباس قصير`
```html
<q>${1:الاقتباس }</q>
```
#### الوصف:
إضافة عنصر q لاقتباس قصير.

---

### 67. تلميح
#### الأمر: `تلميح`
```html
<abbr title="${1:التلميح}">${2:النص الظاهري}</abbr>
```
#### الوصف:
إضافة عنصر abbr لعرض اختصار مع عنوان توضيحي.

---


### 68. لون بنفسجي
#### الأمر: `لون بنفسجي`
```html
color: purple;
```
#### الوصف:
إضافة اللون البنفسجي.

---

### 69. لون برتقالي
#### الأمر: `لون برتقالي`
```html
color: orange;
```
#### الوصف:
إضافة اللون البرتقالي.

---

### 70. لون وردي
#### الأمر: `لون وردي`
```html
color: pink;
```
#### الوصف:
إضافة اللون الوردي.

---

### 71. لون بني
#### الأمر: `لون بني`
```html
color: brown;
```
#### الوصف:
إضافة اللون البني.

---

### 72. لون سماوي
#### الأمر: `لون سماوي`
```html
color: cyan;
```
#### الوصف:
إضافة اللون السماوي.

---

### 73. لون أرجواني
#### الأمر: `لون أرجواني`
```html
color: magenta;
```
#### الوصف:
إضافة اللون الأرجواني.

---

### 74. لون ليموني
#### الأمر: `لون ليموني`
```html
color: lime;
```
#### الوصف:
إضافة اللون الليموني.

---

### 75. لون ذهبي
#### الأمر: `لون ذهبي`
```html
color: gold;
```
#### الوصف:
إضافة اللون الذهبي.

---

### 76. لون فضي
#### الأمر: `لون فضي`
```html
color: silver;
```
#### الوصف:
إضافة اللون الفضي.

---

### 77. لون كحلي
#### الأمر: `لون كحلي`
```html
color: navy;
```
#### الوصف:
إضافة اللون الكحلي.

---

### 78. لون زيتوني
#### الأمر: `لون زيتوني`
```html
color: olive;
```
#### الوصف:
إضافة اللون الزيتوني.

---

### 79. لون تركواز
#### الأمر: `لون تركواز`
```html
color: teal;
```
#### الوصف:
إضافة اللون التركواز.

---

### 80. لون خمري
#### الأمر: `لون خمري`
```html
color: maroon;
```
#### الوصف:
إضافة اللون الخمري.

---

### 81. لون بيج
#### الأمر: `لون بيج`
```html
color: beige;
```
#### الوصف:
إضافة اللون البيج.

---

### 82. وسم تسمية
#### الأمر: `وسم تسمية`
```html
<label for="${1:inputId}">${2:النص هنا}</label>
```
#### الوصف:
إضافة عنصر label لتسمية حقل إدخال.

---

### 83. نص صغير جدًا
#### الأمر: `نص صغير جدا`
```html
<h2 style="font-size: ${1:24}px; color: ${2:black}; text-align: ${3:left};">
    ${4:عنوان هنا}
</h2>
```
#### الوصف:
إضافة عنصر عنوان (H2) مع تنسيق HTML.

---

### 84. نص صغير
#### الأمر: `نص صغير`
```html
<h3 style="font-size: ${1:20}px; color: ${2:black}; text-align: ${3:left};">
    ${4:عنوان هنا}
</h3>
```
#### الوصف:
إضافة عنصر عنوان (H3) مع تنسيق HTML.

---

### 85. نص عادي
#### الأمر: `نص عادي`
```html
<h4 style="font-size: ${1:18}px; color: ${2:black}; text-align: ${3:left};">
    ${4:عنوان هنا}
</h4>
```
#### الوصف:
إضافة عنصر عنوان (H4) مع تنسيق HTML.

---

### 86. نص كبير
#### الأمر: `نص كبير`
```html
<h5 style="font-size: ${1:16}px; color: ${2:black}; text-align: ${3:left};">
    ${4:عنوان هنا}
</h5>
```
#### الوصف:
إضافة عنصر عنوان (H5) مع تنسيق HTML.

---

### 87. نص كبير جدًا
#### الأمر: `نص كبير جدا`
```html
<h6 style="font-size: ${1:14}px; color: ${2:black}; text-align: ${3:left};">
    ${4:عنوان هنا}
</h6>
```
#### الوصف:
إضافة عنصر عنوان (H6) مع تنسيق HTML.

---

### 88. تاريخ مع حد
#### الأمر: `تاريخ مع حد`
```html
<label for="${1:dateInput}">${2:اختر التاريخ}:</label>
<input type="date" id="${1:dateInput}" name="${1:dateInput}" min="${3:2023-01-01}" max="${4:2023-12-31}">
```
#### الوصف:
إضافة حقل إدخال لتحديد التاريخ مع حد أدنى وحد أقصى.

---

## ملاحظات
شكرا جزيلا بالتوفيق
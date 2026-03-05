#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

const CSS_DATA_FILE = '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/css-language-features/server/dist/node/920.cssServerMain.js';

const HTML_TAGS = [
  'a','abbr','acronym','address','area','article','aside','audio','b','base','basefont','bdi','bdo','bgsound','big','blink',
  'blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','data','datalist','dd','del','details',
  'dfn','dialog','dir','div','dl','dt','em','embed','fencedframe','fieldset','figcaption','figure','font','footer','form','frame',
  'frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','iframe','image','img','input','ins','kbd',
  'keygen','label','legend','li','link','main','map','mark','marquee','math','menu','menuitem','meta','meter','nav','nobr','noembed',
  'noframes','noscript','object','ol','optgroup','option','output','p','param','picture','plaintext','pre','progress','q','rb','rp',
  'rt','rtc','ruby','s','samp','script','search','section','select','selectedcontent','slot','small','source','spacer','span','strike',
  'strong','style','sub','summary','sup','svg','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr',
  'track','tt','u','ul','var','video','wbr','xmp'
];

const VOID_TAGS = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

const JS_SNIPPETS = [
  {
    key: 'js:event-listener',
    arPrefix: ['مستمع حدث', 'حدث js'],
    enPrefix: ['js event listener', 'event on'],
    arDescription: 'إضافة مستمع حدث لعنصر DOM',
    enDescription: 'Attach an event listener to a DOM element',
    body: [
      "document.querySelector('${1:.selector}')?.addEventListener('${2:click}', (${3:event}) => {",
      '  ${0}',
      '});'
    ]
  },
  {
    key: 'js:fetch-async',
    arPrefix: ['جلب بيانات', 'fetch async'],
    enPrefix: ['js fetch async', 'fetch await'],
    arDescription: 'قالب fetch باستخدام async/await ومعالجة الأخطاء',
    enDescription: 'Async/await fetch template with error handling',
    body: [
      'async function ${1:loadData}() {',
      '  try {',
      "    const response = await fetch('${2:https://api.example.com}');",
      '    if (!response.ok) throw new Error(`HTTP ${response.status}`);',
      '    const data = await response.json();',
      '    ${0:// use data}',
      '  } catch (error) {',
      "    console.error('Request failed:', error);",
      '  }',
      '}'
    ]
  },
  {
    key: 'js:dom-ready',
    arPrefix: ['جاهزية الصفحة', 'dom ready'],
    enPrefix: ['js dom ready', 'domcontentloaded'],
    arDescription: 'تشغيل الكود بعد اكتمال بناء DOM',
    enDescription: 'Run code after DOM is fully parsed',
    body: [
      "document.addEventListener('DOMContentLoaded', () => {",
      '  ${0}',
      '});'
    ]
  },
  {
    key: 'js:debounce',
    arPrefix: ['دالة debounce', 'تأخير حدث'],
    enPrefix: ['js debounce', 'debounce fn'],
    arDescription: 'دالة Debounce لتقليل تكرار تنفيذ الأحداث',
    enDescription: 'Debounce utility to limit repeated event execution',
    body: [
      'function ${1:debounce}(fn, delay = ${2:300}) {',
      '  let timer;',
      '  return (...args) => {',
      '    clearTimeout(timer);',
      '    timer = setTimeout(() => fn(...args), delay);',
      '  };',
      '}'
    ]
  },
  {
    key: 'js:throttle',
    arPrefix: ['دالة throttle', 'تقليل معدل'],
    enPrefix: ['js throttle', 'throttle fn'],
    arDescription: 'دالة Throttle لتحديد معدل التنفيذ',
    enDescription: 'Throttle utility to control execution rate',
    body: [
      'function ${1:throttle}(fn, limit = ${2:200}) {',
      '  let waiting = false;',
      '  return (...args) => {',
      '    if (waiting) return;',
      '    waiting = true;',
      '    fn(...args);',
      '    setTimeout(() => { waiting = false; }, limit);',
      '  };',
      '}'
    ]
  },
  {
    key: 'js:class',
    arPrefix: ['كلاس جافاسكربت', 'class js'],
    enPrefix: ['js class', 'class template'],
    arDescription: 'قالب كلاس JavaScript',
    enDescription: 'JavaScript class template',
    body: [
      'class ${1:ClassName} {',
      '  constructor(${2:options}) {',
      '    ${0}',
      '  }',
      '}'
    ]
  },
  {
    key: 'js:module-export',
    arPrefix: ['تصدير دالة', 'module export'],
    enPrefix: ['js export function', 'module export'],
    arDescription: 'تصدير دالة باستخدام ES Modules',
    enDescription: 'Export a function using ES modules',
    body: [
      'export function ${1:functionName}(${2:params}) {',
      '  ${0}',
      '}'
    ]
  },
  {
    key: 'js:module-import',
    arPrefix: ['استيراد وحدة', 'module import'],
    enPrefix: ['js import', 'module import'],
    arDescription: 'استيراد عناصر من ملف آخر',
    enDescription: 'Import members from another module',
    body: [
      "import { ${1:name} } from '${2:./module.js}';"
    ]
  },
  {
    key: 'js:local-storage',
    arPrefix: ['تخزين محلي', 'localstorage'],
    enPrefix: ['js localstorage', 'local storage'],
    arDescription: 'حفظ وقراءة JSON من LocalStorage',
    enDescription: 'Save/load JSON in localStorage',
    body: [
      "const key = '${1:app:key}';",
      'localStorage.setItem(key, JSON.stringify(${2:value}));',
      'const cached = JSON.parse(localStorage.getItem(key) ?? "null");',
      '${0:// use cached}'
    ]
  },
  {
    key: 'js:try-catch',
    arPrefix: ['حاول والتقط', 'try catch'],
    enPrefix: ['js try catch', 'try catch'],
    arDescription: 'قالب try/catch لمعالجة الأخطاء',
    enDescription: 'Basic try/catch error handling template',
    body: [
      'try {',
      '  ${1}',
      '} catch (${2:error}) {',
      '  console.error(${2:error});',
      '}'
    ]
  },
  {
    key: 'js:promise',
    arPrefix: ['وعد promise', 'promise'],
    enPrefix: ['js promise', 'new promise'],
    arDescription: 'قالب Promise أساسي',
    enDescription: 'Basic Promise template',
    body: [
      'const ${1:task} = new Promise((resolve, reject) => {',
      '  ${2:// async work}',
      '  resolve(${3:true});',
      '});',
      '',
      '${1:task}.then((value) => {',
      '  ${0:// use value}',
      '}).catch((error) => {',
      '  console.error(error);',
      '});'
    ]
  },
  {
    key: 'js:array-map',
    arPrefix: ['خريطة مصفوفة', 'array map'],
    enPrefix: ['js array map', 'array map'],
    arDescription: 'استخدام map على المصفوفات',
    enDescription: 'Array map template',
    body: [
      'const ${1:result} = ${2:items}.map((${3:item}) => {',
      '  return ${0:${3:item}};',
      '});'
    ]
  },
  {
    key: 'js:array-filter',
    arPrefix: ['تصفية مصفوفة', 'array filter'],
    enPrefix: ['js array filter', 'array filter'],
    arDescription: 'استخدام filter على المصفوفات',
    enDescription: 'Array filter template',
    body: [
      'const ${1:filtered} = ${2:items}.filter((${3:item}) => {',
      '  return ${0:true};',
      '});'
    ]
  },
  {
    key: 'js:switch',
    arPrefix: ['عبارة switch', 'switch'],
    enPrefix: ['js switch', 'switch case'],
    arDescription: 'قالب switch/case',
    enDescription: 'Switch/case template',
    body: [
      'switch (${1:value}) {',
      '  case ${2:condition}:',
      '    ${3:// code}',
      '    break;',
      '  default:',
      '    ${0:// fallback}',
      '}'
    ]
  },
  {
    key: 'js:for-of',
    arPrefix: ['حلقة for of', 'for of'],
    enPrefix: ['js for of', 'for of'],
    arDescription: 'حلقة for...of',
    enDescription: 'for...of loop template',
    body: [
      'for (const ${1:item} of ${2:items}) {',
      '  ${0}',
      '}'
    ]
  },
  {
    key: 'js:reference-quick',
    arPrefix: ['مرجع جافاسكربت', 'js مرجع'],
    enPrefix: ['javascript quick reference', 'js quick ref'],
    arDescription: 'مرجع سريع لأهم كلمات JavaScript',
    enDescription: 'Quick reference for common JavaScript keywords',
    body: [
      '// JavaScript Keywords',
      'break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield await',
      '',
      '// Common APIs',
      'Array.from Object.entries Object.keys Promise.all fetch setTimeout setInterval localStorage querySelector addEventListener',
      '${0}'
    ]
  }
];

function uniqueSorted(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b));
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.warn(`Warning: could not parse JSON file at ${filePath}. Falling back to defaults.`);
    return {};
  }
}

function extractCssProperties() {
  if (!fs.existsSync(CSS_DATA_FILE)) {
    throw new Error(`CSS data source not found: ${CSS_DATA_FILE}`);
  }

  const text = fs.readFileSync(CSS_DATA_FILE, 'utf8');
  const atDirectivesIdx = text.indexOf('atDirectives:[');
  const propertiesIdx = text.lastIndexOf('properties:[', atDirectivesIdx);

  if (atDirectivesIdx === -1 || propertiesIdx === -1) {
    throw new Error('Could not locate CSS properties data in VS Code bundle.');
  }

  const startBracket = text.indexOf('[', propertiesIdx);

  let i = startBracket + 1;
  let squareDepth = 1;
  let curlyDepth = 0;
  let inString = false;
  let escaped = false;
  let objectStart = -1;
  const items = [];

  for (; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === '[') {
      squareDepth += 1;
      continue;
    }

    if (ch === ']') {
      squareDepth -= 1;
      if (squareDepth === 0) {
        break;
      }
      continue;
    }

    if (ch === '{') {
      if (squareDepth === 1 && curlyDepth === 0) {
        objectStart = i;
      }
      curlyDepth += 1;
      continue;
    }

    if (ch === '}') {
      curlyDepth -= 1;
      if (squareDepth === 1 && curlyDepth === 0 && objectStart !== -1) {
        const objectText = text.slice(objectStart, i + 1);
        const nameMatch = objectText.match(/^\{name:"([^"]+)"/);
        if (nameMatch) {
          items.push({
            name: nameMatch[1],
            atRuleDescriptor: /\batRule:/.test(objectText)
          });
        }
        objectStart = -1;
      }
    }
  }

  const filtered = items
    .filter((item) => !item.atRuleDescriptor)
    .map((item) => item.name)
    .filter((name) => /^([a-z]+-)*[a-z]+$/.test(name));

  return uniqueSorted(filtered);
}

function createBaseSnippets(lang) {
  const isArabic = lang === 'ar';

  return {
    'page:html': {
      prefix: isArabic ? ['صفحة', 'قالب html'] : ['html page', 'new html page'],
      body: [
        '<!DOCTYPE html>',
        `<html lang="${isArabic ? 'ar' : 'en'}" dir="${isArabic ? 'rtl' : 'ltr'}">`,
        '<head>',
        '  <meta charset="UTF-8" />',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        `  <title>${isArabic ? '${1:صفحة جديدة}' : '${1:New Page}'}</title>`,
        '</head>',
        '<body>',
        '  ${0}',
        '</body>',
        '</html>'
      ],
      description: isArabic ? 'إنشاء صفحة HTML كاملة' : 'Create a full HTML page template',
      scope: 'html'
    },
    'link:css': {
      prefix: isArabic ? ['ربط css', 'ملف css'] : ['link css', 'stylesheet link'],
      body: ['<link rel="stylesheet" href="${1:styles.css}" />'],
      description: isArabic ? 'ربط ملف CSS خارجي' : 'Link an external CSS file',
      scope: 'html'
    },
    'script:defer': {
      prefix: isArabic ? ['ربط جافاسكربت', 'ملف js'] : ['script defer', 'external js'],
      body: ['<script src="${1:app.js}" defer></script>'],
      description: isArabic ? 'إضافة ملف JavaScript خارجي مع defer' : 'Add external JavaScript file with defer',
      scope: 'html'
    },
    'meta:description': {
      prefix: isArabic ? ['وصف الصفحة', 'ميتا وصف'] : ['meta description', 'page description'],
      body: ['<meta name="description" content="${1:Page description}" />'],
      description: isArabic ? 'إضافة وصف الصفحة لمحركات البحث' : 'Add page description meta tag',
      scope: 'html'
    },
    'css:variables': {
      prefix: isArabic ? ['متغيرات css', 'css vars'] : ['css vars', 'css variables'],
      body: [
        ':root {',
        '  --${1:primary}: ${2:#0ea5e9};',
        '  --${3:text}: ${4:#111827};',
        '}',
        '',
        '${5:body} {',
        '  color: var(--${3:text});',
        '}'
      ],
      description: isArabic ? 'تعريف متغيرات CSS واستخدامها' : 'Define and use CSS custom properties',
      scope: 'css,scss,less,html'
    },
    'css:flex-center': {
      prefix: isArabic ? ['فليكس وسط', 'flex center'] : ['flex center', 'css flex center'],
      body: [
        'display: flex;',
        'align-items: center;',
        'justify-content: center;'
      ],
      description: isArabic ? 'توسيط العناصر باستخدام Flexbox' : 'Center content using Flexbox',
      scope: 'css,scss,less,html'
    },
    'css:grid-auto': {
      prefix: isArabic ? ['شبكة تلقائية', 'grid auto'] : ['grid auto', 'css grid auto'],
      body: [
        'display: grid;',
        'grid-template-columns: repeat(auto-fit, minmax(${1:240px}, 1fr));',
        'gap: ${2:1rem};'
      ],
      description: isArabic ? 'شبكة CSS متجاوبة تلقائيًا' : 'Responsive CSS grid template',
      scope: 'css,scss,less,html'
    }
  };
}

function buildHtmlTagSnippets(lang, existingArabicSnippets = {}) {
  const isArabic = lang === 'ar';
  const snippets = {};

  for (const tag of uniqueSorted(HTML_TAGS)) {
    const key = `html:tag:${tag}`;
    const body = VOID_TAGS.has(tag)
      ? [`<${tag}${tag === 'img' ? ' src="${1:image.jpg}" alt="${2:description}"' : ' ${1}'} />`]
      : [`<${tag}${tag === 'a' ? ' href="${1:#}"' : ''}>`, '  ${0}', `</${tag}>`];

    const fallbackPrefix = isArabic ? [`وسم ${tag}`, `عنصر ${tag}`] : [`tag ${tag}`, `html ${tag}`];
    const fallbackDescription = isArabic ? `إدراج وسم HTML <${tag}>` : `Insert HTML <${tag}> element`;
    const existingSnippet = isArabic ? existingArabicSnippets[key] : null;
    const existingPrefix = Array.isArray(existingSnippet?.prefix) ? existingSnippet.prefix : null;
    const existingDescription = typeof existingSnippet?.description === 'string'
      ? existingSnippet.description.trim()
      : '';

    snippets[key] = {
      prefix: existingPrefix && existingPrefix.length >= 2
        ? [existingPrefix[0], existingPrefix[1]]
        : fallbackPrefix,
      body,
      description: existingDescription || fallbackDescription,
      scope: 'html'
    };
  }

  return snippets;
}

function buildCssPropertySnippets(lang, cssProperties, existingArabicSnippets = {}) {
  const isArabic = lang === 'ar';
  const snippets = {};

  for (const prop of cssProperties) {
    const key = `css:property:${prop}`;
    const fallbackPrefix = isArabic ? [`خاصية ${prop}`, `تنسيق ${prop}`] : [`property ${prop}`, `css ${prop}`];
    const fallbackDescription = isArabic ? `خاصية CSS: ${prop}` : `CSS property: ${prop}`;
    const existingSnippet = isArabic ? existingArabicSnippets[key] : null;
    const existingPrefix = Array.isArray(existingSnippet?.prefix) ? existingSnippet.prefix : null;
    const existingDescription = typeof existingSnippet?.description === 'string'
      ? existingSnippet.description.trim()
      : '';

    snippets[`css:property:${prop}`] = {
      prefix: existingPrefix && existingPrefix.length >= 2
        ? [existingPrefix[0], existingPrefix[1]]
        : fallbackPrefix,
      body: [`${prop}: ${1};`],
      description: existingDescription || fallbackDescription,
      scope: 'css,scss,less,html'
    };
  }

  return snippets;
}

function buildJsSnippets(lang) {
  const isArabic = lang === 'ar';
  const snippets = {};

  for (const item of JS_SNIPPETS) {
    snippets[item.key] = {
      prefix: isArabic ? item.arPrefix : item.enPrefix,
      body: item.body,
      description: isArabic ? item.arDescription : item.enDescription,
      scope: 'javascript,typescript,html'
    };
  }

  return snippets;
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function buildMarkdownReferences(arSnippets, enSnippets, htmlTags, cssProperties) {
  const htmlHeader = `# HTML Tags Snippet Prefixes (AR/EN)\n\nSource: Generated from \`snippets/snippets.code-snippets\` and \`snippets/snippets_en.code-snippets\`.\n\nTotal tags: ${htmlTags.length}\n\n| Tag | Arabic Prefix 1 | Arabic Prefix 2 | English Prefix 1 | English Prefix 2 |\n|---|---|---|---|---|\n`;
  const htmlRows = htmlTags
    .map((tag) => {
      const key = `html:tag:${tag}`;
      const arPrefix = Array.isArray(arSnippets[key]?.prefix) ? arSnippets[key].prefix : [];
      const enPrefix = Array.isArray(enSnippets[key]?.prefix) ? enSnippets[key].prefix : [];
      return `| \`${tag}\` | \`${arPrefix[0] || ''}\` | \`${arPrefix[1] || ''}\` | \`${enPrefix[0] || ''}\` | \`${enPrefix[1] || ''}\` |`;
    })
    .join('\n');

  const cssHeader = `# CSS Property Snippet Prefixes (AR/EN)\n\nSource: Generated from \`snippets/snippets.code-snippets\` and \`snippets/snippets_en.code-snippets\`.\n\nTotal properties: ${cssProperties.length}\n\n| Property | Arabic Prefix 1 | Arabic Prefix 2 | English Prefix 1 | English Prefix 2 |\n|---|---|---|---|---|\n`;
  const cssRows = cssProperties
    .map((prop) => {
      const key = `css:property:${prop}`;
      const arPrefix = Array.isArray(arSnippets[key]?.prefix) ? arSnippets[key].prefix : [];
      const enPrefix = Array.isArray(enSnippets[key]?.prefix) ? enSnippets[key].prefix : [];
      return `| \`${prop}\` | \`${arPrefix[0] || ''}\` | \`${arPrefix[1] || ''}\` | \`${enPrefix[0] || ''}\` | \`${enPrefix[1] || ''}\` |`;
    })
    .join('\n');

  const jsKeys = uniqueSorted(Object.keys(arSnippets).filter((key) => key.startsWith('js:')));
  const jsHeader = `# JavaScript Snippet Reference (AR/EN)\n\nSource: Generated from \`snippets/snippets.code-snippets\` and \`snippets/snippets_en.code-snippets\`.\n\nTotal snippets: ${jsKeys.length}\n\n| Key | Arabic Prefix 1 | Arabic Prefix 2 | English Prefix 1 | English Prefix 2 | Arabic Description | English Description |\n|---|---|---|---|---|---|---|\n`;
  const jsRows = jsKeys
    .map((key) => {
      const arPrefix = Array.isArray(arSnippets[key]?.prefix) ? arSnippets[key].prefix : [];
      const enPrefix = Array.isArray(enSnippets[key]?.prefix) ? enSnippets[key].prefix : [];
      const arDescription = arSnippets[key]?.description || '';
      const enDescription = enSnippets[key]?.description || '';
      return `| \`${key}\` | \`${arPrefix[0] || ''}\` | \`${arPrefix[1] || ''}\` | \`${enPrefix[0] || ''}\` | \`${enPrefix[1] || ''}\` | \`${arDescription}\` | \`${enDescription}\` |`;
    })
    .join('\n');
  const jsReference = `${jsHeader}${jsRows}\n`;

  fs.writeFileSync(path.join(repoRoot, 'docs', 'html-tags-bilingual.md'), `${htmlHeader}${htmlRows}\n`, 'utf8');
  fs.writeFileSync(path.join(repoRoot, 'docs', 'css-properties-bilingual.md'), `${cssHeader}${cssRows}\n`, 'utf8');
  fs.writeFileSync(path.join(repoRoot, 'docs', 'javascript-reference-bilingual.md'), jsReference, 'utf8');
}

function main() {
  const cssProperties = extractCssProperties();
  const htmlTags = uniqueSorted(HTML_TAGS);
  const existingArabicSnippets = readJsonIfExists(path.join(repoRoot, 'snippets', 'snippets.code-snippets'));

  const arSnippets = {
    ...createBaseSnippets('ar'),
    ...buildHtmlTagSnippets('ar', existingArabicSnippets),
    ...buildCssPropertySnippets('ar', cssProperties, existingArabicSnippets),
    ...buildJsSnippets('ar')
  };

  const enSnippets = {
    ...createBaseSnippets('en'),
    ...buildHtmlTagSnippets('en'),
    ...buildCssPropertySnippets('en', cssProperties),
    ...buildJsSnippets('en')
  };

  writeJson(path.join(repoRoot, 'snippets', 'snippets.code-snippets'), arSnippets);
  writeJson(path.join(repoRoot, 'snippets', 'snippets_en.code-snippets'), enSnippets);
  buildMarkdownReferences(arSnippets, enSnippets, htmlTags, cssProperties);

  console.log(`Generated AR snippets: ${Object.keys(arSnippets).length}`);
  console.log(`Generated EN snippets: ${Object.keys(enSnippets).length}`);
  console.log(`Generated HTML tags reference: ${htmlTags.length} tags`);
  console.log(`Generated CSS properties reference: ${cssProperties.length} properties`);
}

main();

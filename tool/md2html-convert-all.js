#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const { githubSlugify, tokenToPlainText } = require('./slug.js');

const ROOT = path.resolve(__dirname, '..');
const HEAD = fs.readFileSync(path.join(__dirname, 'head.html'), 'utf8');
const TAIL = '</body>\n</html>\n';

const md = new MarkdownIt({ html: true, linkify: true, breaks: false });

md.core.ruler.push('heading_ids', (state) => {
  const counts = new Map();
  for (let i = 0; i < state.tokens.length; i++) {
    const token = state.tokens[i];
    if (token.type !== 'heading_open') continue;
    const base = githubSlugify(tokenToPlainText(state.tokens[i + 1]));
    let slug = base;
    const seen = counts.get(base);
    if (seen !== undefined) {
      counts.set(base, seen + 1);
      slug = `${base}-${seen + 1}`;
    } else {
      counts.set(base, 0);
    }
    token.attrSet('id', slug);
  }
});

md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];
  const lang = (token.info || '').trim().split(/\s+/)[0];
  let code;
  if (lang && hljs.getLanguage(lang)) {
    try {
      code = hljs.highlight(token.content, { language: lang, ignoreIllegals: true }).value;
    } catch (e) {
      code = md.utils.escapeHtml(token.content);
    }
  } else {
    code = md.utils.escapeHtml(token.content);
  }
  return `<pre class="hljs"><code><div>${code}</div></code></pre>\n`;
};

function convert(mdPath) {
  const htmlPath = mdPath.replace(/\.md$/, '.html');
  const title = path.basename(mdPath);
  const body = md.render(fs.readFileSync(mdPath, 'utf8'));
  const html = HEAD.replace('<title>__TITLE__</title>', `<title>${title}</title>`) + '\n' + body + '\n' + TAIL;
  fs.writeFileSync(htmlPath, html);
  return htmlPath;
}

const args = process.argv.slice(2);
const targets = [];

if (args.length) {
  for (const a of args) targets.push(path.resolve(a));
} else {
  for (const entry of fs.readdirSync(ROOT)) {
    if (!/^05\./.test(entry)) continue;
    const dir = path.join(ROOT, entry);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) {
      if (/^js-.*\.md$/.test(f)) targets.push(path.join(dir, f));
    }
  }
}

let ok = 0;
for (const t of targets) {
  try {
    convert(t);
    ok++;
  } catch (e) {
    console.error(`FAIL ${t}: ${e.message}`);
  }
}
console.log(`converted ${ok}/${targets.length} files`);

const fs = require('fs')
const path = require('path')

const dist = path.resolve(__dirname, '..', 'dist')

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function write(file, content) {
  fs.writeFileSync(file, content, 'utf8')
}

function rewriteHtml(file, level) {
  let html = read(file)
  // remove type="module" and crossorigin
  html = html.replace(/\s+type="module"/g, '')
  html = html.replace(/\s+crossorigin=""/g, '')
  // fix ./assets -> correct relative prefix based on depth
  const prefix = level === 0 ? './assets/' : '../'.repeat(level) + 'assets/'
  html = html.replace(/\.?\.\/assets\//g, prefix)
  // absolute path links -> hash links for file:// usage
  html = html.replace(/href=\"\/(zh-cn|en)([^\"]*)\"/g, 'href="#/$1$2"')
  // generic absolute links without extension -> hash
  html = html.replace(/href=\"\/([^\"#.]+)\"/g, (m, p1) => {
    if (/\.[a-zA-Z0-9]+$/.test(p1)) return m
    return `href="#/${p1}"`
  })
  write(file, html)
}

function processDist() {
  if (!fs.existsSync(dist)) return
  // root html files
  for (const name of fs.readdirSync(dist)) {
    const p = path.join(dist, name)
    if (name.endsWith('.html') && fs.statSync(p).isFile()) {
      rewriteHtml(p, 0)
    }
  }
  // one-level nested folders like en/, zh-cn/
  for (const dir of fs.readdirSync(dist)) {
    const p = path.join(dist, dir)
    if (fs.statSync(p).isDirectory()) {
      for (const name of fs.readdirSync(p)) {
        const f = path.join(p, name)
        if (name.endsWith('.html') && fs.statSync(f).isFile()) {
          rewriteHtml(f, 1)
        }
      }
    }
  }
}

processDist()



/* Recompile JSX -> JS after editing sections.jsx / app.jsx, then redeploy.
   Usage: node build.js   (downloads Babel standalone to /tmp on first run) */
const fs = require('fs');
const { execSync } = require('child_process');
const BABEL = '/tmp/babel-standalone.js';
if (!fs.existsSync(BABEL)) {
  console.log('Downloading Babel standalone (build-only)…');
  execSync(`curl -s -o ${BABEL} https://unpkg.com/@babel/standalone@7.29.0/babel.min.js`);
}
const Babel = require(BABEL);
for (const name of ['sections', 'app']) {
  const out = Babel.transform(fs.readFileSync(name + '.jsx', 'utf8'), {
    presets: [['react', { runtime: 'classic' }]], compact: false, comments: false,
  }).code;
  fs.writeFileSync(name + '.js', out);
  console.log(`${name}.jsx -> ${name}.js (${out.length} bytes)`);
}

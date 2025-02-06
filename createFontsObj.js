const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'src/assets/fonts');

const fontsObj = {};

fs.readdirSync(fontsDir).forEach(file => {
  const match = file.match(/-(\w+)\.ttf$/);
  console.log(match);
  if (match) {
    const key = match[1].charAt(0).toLowerCase() + match[1].slice(1);
    const value = path.basename(file, '.ttf');
    fontsObj[key] = value;
  }
});

console.log(fontsObj);

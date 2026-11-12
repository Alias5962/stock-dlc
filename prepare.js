// Copie l'interface dans le dossier www avant la construction de l'application
const fs = require('fs');
fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
console.log('prepare: www/index.html prêt');

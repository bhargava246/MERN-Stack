const path = require('path');
const { pathToFileURL } = require('url');
console.log(path.sep);
console.log(process.env.PATH);  
console.log(path.delimiter);

const filePath = 'C:\Users\himan\OneDrive\Desktop\jsclg\project1\index.html';

const currentFilePath = __filename;
console.log(currentFilePath)
let result = path.basename(currentFilePath);
let basenameWithoutExt = path.basename(currentFilePath,'.js')
console.log(basenameWithoutExt);
let dirname = path.dirname(currentFilePath)
console.log(dirname)
console.log(path.extname(currentFilePath))

let pathToFile = path.format({
    dir: '\public\home',
    base: 'index.html'
});
console.log(pathToFile)
console.log(path.isAbsolute(currentFilePath))
let pathtodir = path.join('/home','js','dist','index.js');
console.log(pathtodir)
console.log(path.parse(currentFilePath))
console.log(path.relative('/home/user/config','/home/user/js/'))
console.log(path.resolve());


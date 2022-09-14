/* if you see this in a browser, wtf are u doing lmaooooo */
const fs = require('fs'), path = require('path'), proc = process;fs.writeFileSync(path.resolve(proc.cwd(),'index.html'),fs.readFileSync(path.resolve(proc.cwd(),'template.html'),'utf-8').split('%INVITE%').join(fs.readFileSync(path.resolve(proc.cwd(),'INVITE'),'utf-8').trim()))

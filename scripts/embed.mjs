import{readFileSync,writeFileSync,mkdirSync}from'node:fs';
const files={'/':{type:'text/html; charset=utf-8',body:readFileSync('web/index.html','utf8')},'/style.css':{type:'text/css; charset=utf-8',body:readFileSync('web/style.css','utf8')},'/app.js':{type:'text/javascript; charset=utf-8',body:readFileSync('web/app.js','utf8')}};
const js=files['/app.js'].body;const catalog=Function('return '+js.match(/const resources=(\[[\s\S]*?\n\]);/)[1])();
mkdirSync('worker',{recursive:true});writeFileSync('worker/index.js','const assets='+JSON.stringify(files)+';\nconst catalog='+JSON.stringify(catalog)+';\n'+readFileSync('worker/handler.mjs','utf8'));

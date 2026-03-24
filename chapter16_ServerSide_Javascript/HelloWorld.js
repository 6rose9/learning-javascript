const os = require('node:os');
const path = require('node:path');

console.log('Hello World in Node.js');
console.log('Process.argv ', process.argv);
console.log('current working directory => ', process.cwd());
console.log('Memory usage', process.memoryUsage());
console.log('CPU usage', process.cpuUsage());
console.log('env', process.env);
console.log('user', process.env.USER);

console.log('HomeDir ', os.homedir());
console.log('TempDir ', os.tmpdir());
console.log('Platform ', os.platform());
console.log('Uptime ', os.uptime());
console.log('cpus ', os.cpus().length);
console.log('hostname', os.hostname());

console.log('Paht Demo in Node.js');
console.log('Current file path: ', __filename);
console.log('Current directory path: ', __dirname);
console.log('Path separator: ', path.sep);

let p = __filename;
console.log('Base name: ', path.basename(p));
console.log('Dir name: ', path.dirname(p));
console.log('Ext name: ', path.extname(p));

console.log('normalize ', path.normalize("a/b/c/../../d/"));
console.log('normalize duplicated', path.normalize("//a//b//"));
console.log('join ', path.join("a", "b", "c", "..", "..", "d"));
console.log('resolve', path.resolve("FetchData1.js"));
console.log(path.resolve('a','b.js'));
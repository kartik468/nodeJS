console.log("file api node");
var fs = require('fs');
// // readFile method async
// fs.readFile('./ip/ip.json', function(error, data) {
//     console.log("content: " + data);
// });


// // read file sync
// var data = fs.readFileSync('./ip/ip.json');
// console.log("content: " + data);
// console.log("carry on executing--");

// // write file async
// fs.writeFile('./ip/write.txt', 'hello how r u now---?', function(error) {
//     console.log("finished");
// });


// // write file sync
// fs.writeFileSync('./ip/write.txt','hello how r u?');
// console.log("finished");


// watching a file
console.log("started");
var initialConfig = JSON.parse(fs.readFileSync('./ip/config.json'));
console.log("initialConfig: ", initialConfig);

fs.watchFile('./ip/config.json', function(curr, prev) {
	// var newConfigFile = JSON.parse(fs.readFileSync('./ip/config.json'));
	// console.log("newConfigFile: ", newConfigFile);

	console.log(`the current mtime is: ${curr.mtime}`);
  	console.log(`the previous mtime was: ${prev.mtime}`);
});

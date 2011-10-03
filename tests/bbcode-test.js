var fs = require('fs'),
	bbcode = require('../bbcode'),
	test_file = './test_input';

fs.readFile('./test_input', 'utf8', function (err, data) {
	if (err) throw err;
	console.log(bbcode.render(data));
});
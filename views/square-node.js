let htutil = require('../htutil');

exports.get = function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	let result = req.a * req.a;
	res.end(htutil.page("Square",
		htutil.navbar(), [(!isNaN(req.a) ?
				('<p class="result">{a}*{a}={result}</p>'
					.replace(/{a}/g, req.a)
					.replace("{result}", result)) : ""),
			'<p>Enter a number to see its square</p>',
			'<form action="/square" name="mult" method="get">',
			'A: <input type="text" name="a" />',
			'<input type="submit" value="Submit" />',
			'</form>'
		].join('\n')));
}
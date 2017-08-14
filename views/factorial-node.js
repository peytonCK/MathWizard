let htutil = require('../htutil');
let math = require('../math');

exports.get = function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	res.end(htutil.page("Factorial",
		htutil.navbar(), [(!isNaN(req.a) ?
				('<p class="result">{a} Factorial={fact}</p>'
					.replace("{a}", req.a)
					.replace("{fact}", math.factorial(Math.floor(req.a)))) : ""),
			'<p>Enter a number to see its factorial</p>',
			'<form action="/factorial" name="mult" method="get">',
			'A: <input type="text" name="a" />',
			'<input type="submit" value="Submit" />',
			'</form>'
		].join('\n')));
}
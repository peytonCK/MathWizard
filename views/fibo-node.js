let htutil = require('../htutil');
let math = require('../math');

exports.get = function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	res.end(htutil.page("Fibonacci",
		htutil.navbar(), [(!isNaN(req.a) ?
				('<p class="result">{a} Fibonacci={fibo}</p>'
					.replace("{a}", Math.floor(req.a))
					.replace("{fibo}", math.fibonacci(Math.floor(req.a)))) : ""),
			'<p>Enter a number to see its fibonacci</p>',
			'<form action="/fibonacci" name="mult" method="get">',
			'A: <input type="text" name="a" />',
			'<input type="submit" value="Submit" />',
			'</form>'
		].join('\n')));
}
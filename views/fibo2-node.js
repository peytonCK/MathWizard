let htutil = require('../htutil');
let math = require('../math');

function sendResult(req, res, a, fiboval) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	res.end(htutil.page("Fibonacci2",
		htutil.navbar(), [(!isNaN(req.a) ?
				('<p class="result">{a} Fibonacci={fibo}</p>'
					.replace("{a}", Math.floor(req.a))
					.replace("{fibo}", fiboval)) : ""),
			'<p>Enter a number to see its fibonacci</p>',
			'<form action="/fibonacci2" name="fibonacci" method="get">',
			'A: <input type="text" name="a" />',
			'<input type="submit" value="Submit" />',
			'</form>'
		].join('\n')));
}

exports.get = function(req, res) {
	if (!isNaN(req.a)) {
		math.fibonacciAsync(Math.floor(req.a), function(val) {
			sendResult(req, res, Math.floor(req.a), val);
		})
	} else {
		sendResult(req, res, NaN, NaN);
	}
}
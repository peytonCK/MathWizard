const Port = 8124;
let http = require('http');
let htutil = require('./htutil');

let server = http.createServer(function(req, res) {
	htutil.loadParams(req, res, undefined);

	if (req.requrl.pathname === "/") {
		require('./views/home-node').get(req, res);
	} else if (req.requrl.pathname === '/square') {
		require('./views/square-node').get(req, res);
	} else if (req.requrl.pathname === '/factorial') {
		require('./views/factorial-node').get(req, res);
	} else if (req.requrl.pathname === '/fibonacci') {
		require('./views/fibo-node').get(req, res);
	} else if (req.requrl.pathname === '/mult') {
		require('./views/mult-node').get(req, res);
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end("bad URL " + req.url);
	}
})

server.listen(Port);
console.log('listening to http://localhost:8124');
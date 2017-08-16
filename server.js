const Port = 8124;

let http = require('http');
let path = require('path');
let connect = require('connect');
let htutil = require('./htutil');
let favicon = require('serve-favicon');
let morgan = require('morgan');

let home = require('./views/home-node');
let square = require('./views/square-node');
let factorial = require('./views/factorial-node');
let fibonacci = require('./views/fibo-node');
let fibonacci2 = require('./views/fibo2-node');
let mult = require('./views/mult-node');

let app = connect();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
	.use(morgan('combined'));


app.use(htutil.loadParams);
app.use('/', function(req, res, next) {
	if (req.url == "/") {
		home.get(req, res);
	}
	next();
});
app.use('/mult', function(req, res, next) {
	mult.get(req, res);
	next();
});
app.use('/fibonacci2', function(req, res, next) {
	fibonacci2.get(req, res);
	next();
});
app.use('/fibonacci', function(req, res, next) {
	fibonacci.get(req, res);
	next();
});
app.use('/factorial', function(req, res, next) {
	factorial.get(req, res);
	next();
});
app.use('/square', function(req, res, next) {
	square.get(req, res);
	next();
});

let server = http.createServer(app);
server.listen(Port);
console.log('listening to http://localhost:8124');
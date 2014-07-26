var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var filter = hexo.extend.filter;

var path = require('path')

var api = require('./api');

filter.register('server_middleware', function (app) {
    app.use('/admin/api/', bodyParser.json())
    api(app);
    app.use('/admin/monkeys', function (req, res, next) {
        res.end('Monkeys!');
    });
    app.use('/admin/', serveStatic(path.join(__dirname, 'www')));
});

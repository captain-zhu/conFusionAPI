/**
 * Created by zhuyongxuan1 on 16/3/15.
 */

var express = require('express'),
    morgan = require('morgan'),
    dishRouter = require('./dishRouter'),
    leaderRouter = require('./leaderRouter'),
    promoRouter = require('./promoRouter');


var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(morgan('dev'));

app.use('/dishes', dishRouter.dishRouter());

app.use('/promotions', promoRouter.promoRouter());

app.use('/leadership', leaderRouter.leaderRouter());

app.use(express.static('/Users/zhuyongxuan1/WebstormProjects/conFusionAPI' + '/public'));

app.listen(port, hostname, function(){});

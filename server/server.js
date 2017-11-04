var mdb = require('moviedb')('5192eb6331a3db50b6b388ae8941edc6');
var express = require('express')
var app = require('express')();
var torrent = require('./torrentsSearch.js');
var torrentsearch = new torrent();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('./app'))
app.use('/bower_components', express.static('./bower_components'))
app.use('/styles', express.static('./app/styles'))
app.get('/popular', function(req, res) {

    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({ page: page }, function(err, data) {
        data.total_pages = 1000;

        res.send(data)
    });
});

app.get('/search', function(req, res) {
    var query = req.query["q"];
    var page = (req.query["page"]) ? req.query["page"] : 1;
    console.log("sa mere")
    mdb.searchMovie({ query: query, page: page }, function(err, data) {
        res.send(data)
    });
})

app.get("/similar/:id", function(req, res) {
    var id = req.params.id;
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({ id: id, page: page }, function(err, data) {
        res.send(data);
    });
});

app.get('/info/:id', function(req, res) {
    var id = req.params.id;
    mdb.movieInfo({ id: id }, function(err, data) {
        res.send(data);
    });
});
app.get('/torrent', function(req, res) {
    var title = req.query["title"];
    if (torrentsearch.ready === true) {
        torrentsearch.searchTorrent(title).then((torrents => {
            console.log("recuperation des torrents : " + torrents.length)
            res.send(torrents);
        }))
    } else {
        res.send(["waiting"])
    }

});

app.listen(3000, function() {
    console.log("Listening 3000")
});
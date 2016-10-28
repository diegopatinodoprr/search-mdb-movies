"use strict";
var _                = require('lodash');
const TorrentsSearch = require('torrents-search');
// Custom logger
const myLogger       = {
  info    : function (msg) {
    console.log(msg);
  }, error: function (msg) {
    console.error(msg);
  }
};
class SearchTorrent {
  constructor() {
    console.log('SearchTorrent.constructor()')
    this.search = new TorrentsSearch({
      logger: myLogger, timeout: 100000 // Optional
    });
    this.ready  = false
    var self    = this;
    this.search.loadTrackers()
    .then(() => {
      console.log('Loaded trackers :', self.search.getTrackers());
      self.search.enableTracker('Cpasbien');
      self.search.enableTracker('FrenchTorrentDB');
      self.ready = true;
    }).catch((err) => {
      self.ready = false;
    })
  }
  
  searchTorrent(title) {
    console.log("recherche des torrent pour " + title)
    return this.search.search(title, {type: 'movie'}).then(torrents => {
      console.log(torrents.length + ' torrent(s) found.');
      var res = []
      _.map(torrents, function (t) {
        var rigth_uri = _.last(_.split(t.detailsUrl, '/'))
        console.log(rigth_uri)
        var left_uri = t._tracker._endpoints.download
        var uri      = left_uri + "/" + rigth_uri.replace('html', 'torrent')
        res.push({uri: uri, single: rigth_uri})
      })
      if (res.length == 0) {
        res.push({uri: '/', single: "pas des torrents"})
      }
      console.dir(res)
      //detailsUrl
      //_tracker.Cpasbien._endpoint.download
      return res
    });
  }
}
module.exports = SearchTorrent;
// Custom logger
/*const myLogger = {
 info: function(msg) {
 console.log(msg);
 },
 
 error: function(msg) {
 console.error(msg);
 }
 };
 
 const search = new TorrentsSearch({
 logger: myLogger, // Optional
 timeout: 100000 // Optional
 });
 
 search.loadTrackers()
 .then(() => {
 // Display all loaded trackers
 console.log('Loaded trackers :', search.getTrackers());
 
 // Enable a tracker
 //search.enableTracker('t411');
 //search.setCredentials('t411', 'USERNAME', 'PASSWORD');
 
 // Enable a tracker
 //search.enableTracker('FrenchTorrentDB');
 //search.setCredentials('FrenchTorrentDB', 'USERNAME', 'PASSWORD');
 
 // zetorrents
 //http://www.ultimate-torrent.com/
 //http://www.qctorrent.io/login
 //http://www.zone-torrent.net/
 //http://www.megatorrent.biz/
 //lien-torrent
 //http://torrentz.eu/
 //http://www.torrenthounds.com/
 //phttps://isohunt.to/
 
 // Enable a tracker
 search.enableTracker('Cpasbien');
 })
 .then(() => {
 // Search torrents on all enabled trackers
 return search.search('spiderman', {type: 'movie'});
 })
 .then((torrents) => {
 console.log(torrents.length +' torrent(s) found.');
 
 torrents.forEach((torrent) => {
 console.log(torrent)
 const t = extend(true, {}, torrent);
 //delete t._tracker;
 
 console.log(t);
 });
 
 console.log('Downloading first torrent :');
 return search.download(torrents[0]);
 })
 .then((torrentFileBuffer) => {
 console.log(torrentFileBuffer);
 });
 
 */

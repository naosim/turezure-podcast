// import Podcast from 'podcast';
Podcast = require('podcast');
 
/* lets create an rss feed */
const feed = new Podcast({
    title: '徒然雑談.fm',
    description: 'ポッドのキャスト',
    feed_url: 'https://naosim.github.io/turezure-podcast/rss.xml',
    site_url: 'https://naosim.github.io/turezure-podcast',
    image_url: 'https://naosim.github.io/turezure-podcast/icon.png',
    docs: 'https://naosim.github.io/turezure-podcast/index.html',
    author: 'なおしむ',
    managingEditor: 'なおしむ',
    webMaster: 'なおしむ',
    copyright: '2019 なおしむ',
    language: 'jp',
    categories: ['テクノロジー','脱力'],
    pubDate: 'Jan 1, 2019 00:00:00 GMT',
    ttl: '60',
    itunesAuthor: 'なおしむ',
    itunesSubtitle: 'ポッドのキャスト',
    itunesSummary: 'I am a summary',
    itunesOwner: { name: 'なおしむ', email:'hoge@fuga.foo' },
    itunesExplicit: false,
    itunesCategory: {
        "text": "Entertainment",
        "subcats": [{
          "text": "Television"
        }]
    },
    itunesImage: 'https://naosim.github.io/turezure-podcast/icon.png'
});
 
/* loop over data and add to feed */
feed.addItem({
    title:  'はじめての',
    description: '録音してみたよ',
    url: 'https://naosim.github.io/turezure-podcast/index.html', // link to the item
    guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'なおしむ', // optional - defaults to feed author property
    date: 'Jan 1, 2019', // any format that js Date can parse.
    enclosure : {url:'https://naosim.github.io/turezure-podcast/podcast_001.mp3', file:'docs/podcast_001.mp3'}, // optional enclosure
    itunesAuthor: 'なおしむ',
    itunesExplicit: false,
    itunesSubtitle: 'ポッドのキャスト',
    itunesSummary: 'I am a summary',
    itunesDuration: 12345,
    itunesKeywords: ['javascript','podcast']
});
 
// cache the xml to send to clients
const xml = feed.buildXml();
console.log(xml);
console.log("Hey ya'll")

// import the package twit
var Twit = require('twit');
var config = require('./config');

// Authenticate with OAuth
var T = new Twit(config);

// rewritten JS code ~ He broke the code into three parts

// 2. what I want
var params = { 
	// from: '@realDonaldTrump',
	q: 'frutas since:2016-8-14',
	count: 12
}

// 1. Command: Search for tweets
T.get('search/tweets', params, gotData);

// 3. Callback function ~ triggered when the data returns from the API
function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text)
	}
};
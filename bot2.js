console.log("follow bot is starting. Bleep bloop.")

// import the package twit
var Twit = require('twit');
var config = require('./config');

// Authenticate with OAuth
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name
	tweetIt('@' + screenName + ' Thank you for following. You want Marriage?');
}

function tweetIt(txt) {

	
	var tweet = {
		status: txt,
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		//What am I doing?

			// I am testing to see if anything went wrong
			//such as having too many characters.
	  if(err) {
	  	console.log("Woah there twitter fingers!");
	  } else {
	  	console.log("It works!!");
	  }
	};
};
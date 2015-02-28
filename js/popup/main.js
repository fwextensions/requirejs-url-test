require([], function() {
	chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
		var url = tabs[0].url;
		console.log("URL from main.js", url);
	});

	console.log("URL from global var accessed in main.js", tabURL);
});

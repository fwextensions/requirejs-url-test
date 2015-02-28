chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
	tabURL = tabs[0].url;
	console.log("URL from get-url.js", tabURL);
});

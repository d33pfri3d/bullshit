(function(){

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.insertCSS(null, { file: "bs.css" })
	});

}())
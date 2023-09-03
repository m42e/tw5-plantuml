/*\
title: $:/plugins/m42e/plantuml/utils.js
type: application/javascript
module-type: utils

Utility functions to handle plantuml...

@preserve
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var plantuml = {

/*
main encoding handler
*/
encodePlantUML: function(src, type, callback) {
	// Want the source only?
	if(type === "src"){
    callback(src);
    return;
  }
  var http = new XMLHttpRequest();
	http.open("POST",$tw.wiki.getTextReference("$:/plugins/m42e/plantuml/server-url") + "coder",true);
  http.setRequestHeader('Content-Type','text/plain');
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			callback(http.responseText);
		}
	};
	http.send(src);
}
};


// Export
exports.plantuml = plantuml;

})();

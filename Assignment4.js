//alert("JavaScript works!");


// Is the string a URL? (Does it start with http: or https:?)
var checkURL = function (string) {
	string = string.toLowerCase();
	
	if ((string.substring(0,7) == "http://") || (string.substring(0,8) == "https://")) {
		return  (URL + " is a valid URL.");
	} else {
		return  (URL + " is not a valid URL.");
	}
}


































var URL = "Http://www.fullsail.com/";
console.log(checkURL(URL));
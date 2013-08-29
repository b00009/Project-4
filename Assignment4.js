//alert("JavaScript works!");


// Is the string a URL? (Does it start with http: or https:?)
var checkURL = function (string) {
	string = string.toLowerCase();
	
	if ((string.substring(0,7) == "http://") || (string.substring(0,8) == "https://")) {
		return  (URL + " is a valid URL.");
	}
	else {
		return  (URL + " is not a valid URL.");
	}
}




// Does a string follow an aaa@bbb.ccc pattern like an email address?
var checkEmail = function (string) {
var at = [];
	for (var i = 0; i < (string.length); i++) {
		if (string.charAt(i) == "@") {
			at.push(i);
		}
	}
	if (at.length == 1 && at[0] != 0) {
		if (string.charAt(string.length - 3) == "." || string.charAt(string.length - 4) == ".") {
			return (email + " is a valid email.");
	}
		else {
			return (email + " is not a valid email.");	
		}
	}
	else {
		return (email + " is not a valid email.");	
	}
}


// Find the smallest value in an array that is greater than a given number
var findVal = function (array, num) {
	// sort
	var compare = function (a, b) {
		return a - b;
	}
	array.sort(compare);

	// Loop 
	for (var i = 0; i < array.length; i++) {
		if (array[i] > num) {
			return array[i];
		}
	}
}


//Validate phone number

var numberCheck = function (number) {
	var phoneNum = "000-000-0000"
		if (number.charAt(3) == "-" && number.charAt(7) == "-" && number.length == phoneNum.length) {
			return ("This is a valid phone number");
		}
		else{
			return ("This is not a valid number");
		}

}





















var URL = "Http://www.fullsail.com/";
console.log(checkURL(URL));

var email = "aname@fullsail.edu";
console.log(checkEmail(email));

var array = [12, 15, 7, 34, 22, 78];
console.log(findVal(array, 10));


console.log(numberCheck("123-456-7890"));
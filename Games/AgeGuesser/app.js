var Welcome = alert("Hi. I will Guess Your Age Please Answer All Questions Correctly To Get Your Correct Age....")
var one10 = prompt("Enter any Number Between 1 to 9")
var one10x2 = one10 * 2
var one10x2p5 = one10x2 + 5
var x50 = one10x2p5 * 50
//x50 = 750 if chosen 5 at the beggining
var askcele = prompt("Did you celebrate your Birthday this Year? Please answer in <y> or <n> . Answer correctly or else I can't guess your Age.")
if (askcele == "y"){

	var x50p = x50 + 1771
	//2520 if chosen 5
} 

else{

	var x50p = x50 + 1770
	//else 2519

}



var dob = prompt("Enter your year of Date of Birth Example : 2000, 1991, 2010 etc..")

var result = x50p - dob

alert("The First Number is what you Chosen at the Start and the Second Two Numbers are your Age. Number : " + result)
document.write("The First Number is what you Chosen at the Start and the Second Two Numbers are your Age. Number : " + result)
















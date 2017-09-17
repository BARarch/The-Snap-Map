/*   --------------------        Map-Remove.js        -----------------------

//   Author:   			Anthony Quivers
//	 Discription: 		Configures google maps webpage for screen capture.
//						Removes interface components and adds black bars
//						on both sides to show the area of the screen that 
//						is included in instagrams square format.  The scale remains.
//
//	 Usage: 			Navigate to google maps and paste script to js console.
//						Use the up arrow toggle screen capture mode on/off.  The
//						square format adjusts as the window size changes when the
//                      screen capture is on.				 

*/


// Ids and Classes to be removed
var ids = ["gb", "fineprint", "omnibox"];
var classes = ["app-horizontal-widget-holder", "app-vertical-widget-holder"]
var scaleID = "scale";

// Current window width and Height
var width =  document.body.clientWidth;
var height = document.body.clientHeight;

// When script is run the screen capture mode is turned on
for (var i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.display = "none";
}

for (var i = 0; i < classes.length; i++) {
  var div = document.getElementsByClassName(classes[i]);
  for (var j = 0; j < div.length; j++) {
    div[j].style.display = "none";
  }
}

// Left and Right format bars and scale
var leftBlock = document.createElement("div");
var rightBlock = document.createElement("div");
var scale = document.getElementById(scaleID);

// Styling attributes for format Bars
leftBlock.style.position = "absolute";
leftBlock.style.top = "0";
leftBlock.style.left = "0";
leftBlock.style.width = "30%"
leftBlock.style.height = "100%"
leftBlock.style.backgroundColor = "rgba(9, 17, 27, 0.94)";

rightBlock.style.position = "absolute";
rightBlock.style.bottom = "0";
rightBlock.style.right = "0";
rightBlock.style.width = "30%"
rightBlock.style.height = "100%"
rightBlock.style.backgroundColor = "rgba(9, 17, 27, 0.94)";

// Styling attributes for scale
scale.style.position = "absolute";
scale.style.bottom = "22px";
scale.style.right = "30%";
scale.style.color = "rgb(235, 235, 235)";
document.getElementsByClassName("widget-scale-ruler")[0].style.borderColor = "rgb(235, 235, 235)";

// Add format bars and scale to DOM as childern of 'body'
document.body.appendChild(leftBlock);
document.body.appendChild(rightBlock);
document.body.appendChild(scale);

//  Calculates and updates the format bars to sqaure off the map in the window
function square(){
	var width =  document.body.clientWidth;
	var height = document.body.clientHeight;
	var aspectRatio = (width - height) / width;
	var aspectRatioVert = (height - width) / height;

	console.log(aspectRatio);

	if (aspectRatio > 0){
		// For Landscape framed body window
		pct = Math.floor((aspectRatio *  100) / 2);
		leftBlock.style.width = pct.toString() + "%";
		leftBlock.style.height = "100%";
		rightBlock.style.width = pct.toString() + "%";
		rightBlock.style.height = "100%";

		scale.style.bottom = "22px";
		scale.style.right = pct.toString() + "%";
	}else{
		// For Portait framed body widow
		pct = Math.floor((aspectRatioVert * 100) / 2);
		leftBlock.style.height = pct.toString() + "%";
		leftBlock.style.width = "100%";
		rightBlock.style.height = pct.toString() + "%";
		rightBlock.style.width = "100%";

		scale.style.right = "0";
		scale.style.bottom = pct.toString() + "%";
	}
}

// Determine the state of the viewer from the display attribute of the first id
// altered by the viewer.  If the componets are on.  Turn them all back off, and
// vice versa.  When turning back on square off too!
function toggle(){
	var state = ""
	if (document.getElementById(ids[0]).style.display == "none"){
		// If all markings are off bring everything back, turn off side blocks
		state = "";
		square();
		leftBlock.style.display = "none";
		rightBlock.style.display = "none";
	}else{
		state = "none";
		leftBlock.style.display = "";
		rightBlock.style.display = "";
	}

	for (var i = 0; i < ids.length; i++) {
  		document.getElementById(ids[i]).style.display = state;
	}

	for (var i = 0; i < classes.length; i++) {
	  var div = document.getElementsByClassName(classes[i]);
	  for (var j = 0; j < div.length; j++) {
	    div[j].style.display = state;
	  }
	}

}

// Event handeler for toggle
function toggleHandler(event){
	// Up arrow key code: 38
	if (event.keyCode == 38){
		toggle();
		console.log("UpKey");
	}

}

// Initial square
square();

// Square on window resize
document.body.onresize = function(){square()};

// Listener for toggles
addEventListener("keydown", toggleHandler);

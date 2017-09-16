var ids = ["gb", "fineprint", "omnibox"];
var classes = ["app-horizontal-widget-holder", "app-vertical-widget-holder"]
var scaleID = "scale";

//var classes = ["widget-viewcard", "widget-zoom", "watermark"];
//var hidden = (window.getComputedStyle(document.getElementById(ids[0]))).getPropertyValue("display");

var width =  document.body.clientWidth;
var height = document.body.clientHeight;

for (var i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.display = "none";
}

for (var i = 0; i < classes.length; i++) {
  var div = document.getElementsByClassName(classes[i]);
  for (var j = 0; j < div.length; j++) {
    div[j].style.display = "none";
  }
}

var leftBlock = document.createElement("div");
var rightBlock = document.createElement("div");

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

document.body.appendChild(leftBlock);
document.body.appendChild(rightBlock);

function square(){
	var width =  document.body.clientWidth;
	var height = document.body.clientHeight;
	var aspectRatio = (width - height) / width;
	var aspectRatioVert = (height - width) / height;

	console.log(aspectRatio);

	if (aspectRatio > 0){
		pct = Math.floor((aspectRatio *  100) / 2);
		leftBlock.style.width = pct.toString() + "%";
		leftBlock.style.height = "100%";
		rightBlock.style.width = pct.toString() + "%";
		rightBlock.style.height = "100%";
	}else{
		// For Portait framed body widow
		pct = Math.floor((aspectRatioVert * 100) / 2);
		leftBlock.style.height = pct.toString() + "%";
		leftBlock.style.width = "100%";
		rightBlock.style.height = pct.toString() + "%";
		rightBlock.style.width = "100%";
	}

	//Get Scale Element and move it too

}

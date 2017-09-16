var ids = ["gb", "fineprint"];
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

function square(){
	var width =  document.body.clientWidth;
	var height = document.body.clientHeight;
	var aspectRatio = (width-height)/width;
	var aspectRatioVert = (height-width)/height;

	

}

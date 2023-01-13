// Create the first div
var floatads = document.createElement("div");
floatads.id = "floatads";
floatads.style.cssText = "width:100%;margin:auto; text-align:center;float:none;overflow:hidden; display:scroll;position:fixed; bottom:0;z-index:9999";

// Create the second div
var innerDiv = document.createElement("div");
innerDiv.style.cssText = "text-align:center;display:block;max-width:729px;height:auto;overflow:hidden;margin:auto";

// Append the second div to the first div
floatads.appendChild(innerDiv);

// Append the first div to the body
document.body.appendChild(floatads);

//Paste Iklan Disini

	atOptions = {
		'key' : '00cd8e71a598d3131381d005535ef9fc',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivecreativeformat.com/00cd8e71a598d3131381d005535ef9fc/invoke.js"></scr' + 'ipt>');


// Batas Iklan

document.write('</div>');
document.write('</div>');

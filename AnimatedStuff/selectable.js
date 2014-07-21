$(document).ready(function(){

	$(".selectable").bind("mousedown", function(e){
		var meElem = this;
		this.__test = setTimeout(function(){
			$(meElem).find(".icon")
				.css("width", "24px")
				.css("height", "40px")
				.css("background-color","#ccddff")
		}, 500);
	});

	$(".selectable").bind("mouseup mouseleave", function(e){
		clearInterval(this.__test);
	});

});
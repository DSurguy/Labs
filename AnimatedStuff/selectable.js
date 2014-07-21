$(document).ready(function(){

	$("#selectable").on("mousedown", ".selectable.unchecked", function(e){
		var meElem = this;
		$(meElem)
		  .css("box-shadow","inset 0px 0px 10px #cdf")
		  .addClass("checked")
		  .removeClass("unchecked");
		this.__test = setTimeout(function(){
			$(meElem)
			  .addClass("checked")
		  	  .removeClass("unchecked");

			var $uncheck = $(meElem).find(".icon.unchecked"),
				$check = $(meElem).find(".checked");

			TweenLite.set($uncheck.parent(), {perspective: 500});
			TweenLite.set($check, {rotationY:'98deg',display:"block"});
			TweenLite.to($uncheck, 0.075, {rotationY:'98deg'});
			TweenLite.to($check, 0.075, {rotationY:'0deg', delay: 0.075});
			TweenLite.to($(meElem), 0.15, {backgroundColor:"#cdf"});
			TweenLite.set($(meElem), {boxShadow:'none', delay: 0.15});

		}, 500);
	})
	.on("mouseup mouseleave", ".selectable.unchecked", function(e){
		clearInterval(this.__test);
		$(this).css("box-shadow", "none");
	})
	.on("mouseenter", ".selectable.unchecked", function(e){
		$(this).css("box-shadow", "inset 0 0 6px #ddd");
	})
	.on("mousedown", ".selectable.checked", function(e){
		var meElem = this;
		$(meElem)
		  .css("box-shadow","inset 0px 0px 10px #fff");

		this.__test = setTimeout(function(){

			$(meElem)
			  .addClass("unchecked")
		  	  .removeClass("checked");

			var $uncheck = $(meElem).find(".icon.unchecked"),
				$check = $(meElem).find(".checked");

			TweenLite.set($check.parent(), {perspective: 500});
			TweenLite.set($uncheck, {rotationY:'98deg',display:"block"});
			TweenLite.to($check, 0.075, {rotationY:'98deg'});
			TweenLite.to($uncheck, 0.075, {rotationY:'0deg', delay: 0.075});
			TweenLite.to($(meElem), 0.15, {backgroundColor:"#f5f5f5"});
			TweenLite.set($(meElem), {boxShadow:'none', delay: 0.15});

		}, 500);
	}).on("mouseup mouseleave", ".selectable.checked", function(e){
		clearInterval(this.__test);
		$(this).css("box-shadow", "none");
	}).on("mouseenter", ".selectable.checked", function(e){
		$(this).css("box-shadow", "inset 0 0 6px #e5f5ff");
	});

});

var itemData = {
	0: {
		complete: false
	},
	1: {
		complete: false
	},
	2: {
		complete: false
	}
};

$(document).ready(function(){

	/*
	*	One-Click complete
	*
	*	If a user clicks on an item once, it should complete it?
	*
	*/
	$(".section").on("swiperight", ".item", function(){
		//get this item's ID
		var itemID = parseInt($(this).attr("data-id"));

		//if this item is not complete, complete it and start the animation
		if( itemData[itemID].complete === false ){
			itemData[itemID] = true;

			//start the animation
			TweenLite.to($(this).find(".handle"), 0.2, {left: "304px"});
			TweenLite.to($(this).find(".shade"), 0.2, {width: "304px"});
		}

	});
});
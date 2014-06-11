$.fn.modal = function(headerHtml, bodyHtml, options){

	/*options
	var options = {
		css: {
			key: value,
			...
		},
		class: 'testModal',

	}
	*/

	var modalContain = $("<div class=\""+Date.now()+"-modalBox\"></div>"),
		newModal = $("<div class=\""+Date.now()+"-modal\"></div>");

	modalContain.append(newModal);

	//add the header
	newModal.append("<div class=\"header\"></div>");
	//add the body
	newModal.append("<div class=\"body\"></div>");

	//apply default css
	modalContain
		.css("background","rgba(255,255,255,0.8)")
		.css("position","absolute")
		.css("top","0")
		.css("left","0")
		.css("width","100%")
		.css("height","100%");

	newModal
		.css("display", "none")
		.css("position", "absolute")
		.css("top","50%")
		.css("left","50%")
		.css("transform","translate(-50%)");

	newModal.find(".header")
		.css("padding","10px")
		.css("font-size", "1.8rem")
		//add the header html
		.append(headerHtml);

	newModal.find(".body")
		.css("padding","10px")
		.css("font-size","1rem")
		//add the body html
		.append(bodyHtml);

	//add the modal to the DOM
	this.prepend(modalContain);

	//animate the display of the modal
	newModal.css("display","block").addClass("anim-dsModalPopIn");

};
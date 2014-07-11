$.fn.modal = function(headerHtml, bodyHtml, options){

	var options = {
		width: 300,
		height: 460,
		theme: "a",
		beforeLoad: function(){},
		afterLoad: function (modalBody){
			
		},
		actions: [{
			icon: "test.png",
			label: "Test Action",
			color: "green",
			action: function(){}
		}]
	}

	var modalContain = $("<div class=\""+Date.now()+"-m modalBox theme-"+options.theme+"\"></div>"),
		newModal = $("<div class=\""+Date.now()+"-m modal theme-"+options.theme+"\"></div>");

	modalContain.append(newModal);

	//add the header
	newModal.append("<div class=\"header\"></div>")

	//add the body
	newModal.append("<div class=\"body\"></div>");

	//add the actions
	newModal.append("<div class=\"actions\"></div>");

	//add the header html
	newModal.find(".header").append(headerHtml);

	//add the body html and controls
	newModal.find(".body").append(bodyHtml);

	//add the action buttons
	var actions = newModal.find(".actions");

	for( var i=0; i<options.actions.length; i++ ){
		var thisAction = options.actions[i];
		actions.append("<div class=\"action\" style=\"background-color: "+thisAction.color+"\"><img src=\"path/"+thisAction.icon+"\" />"+thisAction.label+"</div>");
	}

	//set some display props

	modalContain
		.css("width", "100%")
		.css("height","100%")
		.css("position","absolute")
		.css("top", "0")
		.css("left", "0")
		.css("background","rgba(0,0,0,0.7)");

	newModal
		.css("width", options.width+"px")
		.css("height", options.height+"px")
		.css("position","absolute")
		.css("background-color","#fff");

	//set some postioning props
	newModal
		.css("top","50%")
		.css("left","50%")
		.css("margin-left","-"+options.width/2+"px")
		.css("margin-top", "-"+options.height/2+"px");

	//prep the animation
	TweenLite.set(newModal, {scaleX:0, scaleY:0});
	TweenLite.set(modalContain, {background: "rgba(0,0,0,0)"})


	//add the modal to the DOM
	this.prepend(modalContain);

	//animate the dispay
	var tLine = new TimelineLite();

	tLine.to(modalContain, 0.10, {background: "rgba(0,0,0,0.8)"});
	tLine.to(newModal, 0.12, {scaleX: 1.1, scaleY: 1.1});
	tLine.to(newModal, 0.06, {scaleX: 1.0, scaleY: 1.0});

	tLine.play();

};
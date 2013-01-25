//******************************************************************
// File_Name:	product_hotspot.js
//
// Purpose:	This code is designed to show an array of hotspots 
//				over a background image. Each hotspot includes
//				coordinates and content that will be displayed 
//				on mouse enter events.
//
// Created by: George Thomaidis
//*******************************************************************

$(function() { 
	
	//build data structure to store coordinates and content. 
	var product_hotspots = new Array();
	product_hotspots[0] = {x: 200, y:200, content: "This is test content"}
	product_hotspots[1] = {x: 500, y:500, content: "This is more test content"}
	product_hotspots[2] = {x: 400, y:400, content: "This is even more test content"}
	
	var  hotspotFadeTimer = 1500; 		//Value reflects how fast the hotspots fade in;
	var  contentFadeTimerIn = 500; 		//Value reflects how fast the content fades in;
	var  contentFadeTimerOut = 500;		//Value reflects how fast the content fads out;

	//loop through each hotspot. 
	$.each(product_hotspots,function(idx) {

		//append a new div to #product_image for each hotspot with the following format: 
		var $newdiv1 = $('<div class="bullet" style="position: absolute; left:'+product_hotspots[idx].x+'px ; top:'+product_hotspots[idx].y+'px" data-content="'+product_hotspots[idx].content+'"><img src="images/hotspot.png"/></div>');

		//Adds hot spots to the coordinates set in the array
		$("#product_image").append(($newdiv1).fadeIn(hotspotFadeTimer));
		$(".bullet").css('cursor', 'pointer');
		
	});
	
	//This function listens to rollover events and extract the data-content attribute and place in #rollover_content. 
	$(".bullet").mouseenter(function() {
			//Grabs the data-content attached to the entered bullet from the array and stores it in the "$content" variable. 
			var $content = $(this).attr("data-content");

			//Adds html text content wrapped in a paragraph tag which is hidden until fade in shows it
			$("#rollover_content").html("<p>" +$content).hide().fadeIn(contentFadeTimerIn);
	});

	//This function listens for mouse leave events and fades the content associated with it 
	$(".bullet").mouseleave(function() {
			//Fades out the hotpsot content
			$("#rollover_content").fadeOut(contentFadeTimerOut);
	});

	
	//The console is great for debugging:
	console.log(product_hotspots); 
});

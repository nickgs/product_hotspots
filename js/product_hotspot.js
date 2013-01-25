$(function() { 
	
	//build data structure to store coordinates and content. 
	var product_hotspots = new Array();
	product_hotspots[0] = {x: 200, y:200, content: "This is test content"}
	product_hotspots[1] = {x: 500, y:500, content: "This is more test content"}
	product_hotspots[2] = {x: 400, y:400, content: "This is even more test content"}
	
	//loop through each hotspot. 
	$.each(product_hotspots,function(idx) {
		//append a new div to #product_image for each hotspot with the following format: 
		var $newdiv1 = $('<div class="bullet" style="position: absolute; left:'+product_hotspots[idx].x+'px ; top:'+product_hotspots[idx].y+'px" data-content="'+product_hotspots[idx].content+'"><img src="images/hotspot.png"/></div>');
		
		//hint: 
		$("#product_image").append($newdiv1);
		
	});
	
	//create function to listen to rollover events and extract the data-content attribute and place in #rollover_content. 
	$(".bullet").mouseover(function() {
			
			//store content of this bullet in the content variable. 
			var content = $(this).attr("data-content");  
			//alert(content);
			//place content into the #rollover_content. 
			//hint: 
			$("#rollover_content").html(content);
		
	}); 
	
	//The console is great for debugging:
	console.log(product_hotspots); 
});
//4P`s: Preparation / Plan / Perform / Perfect

//Preparation: 
//Problem: User when clicking on image goes to a dead end
//Solution:  Create an overlay with a large image



//Plan (ecrire le pseudo code de ton projet)
//Capture the click even on a link to an image
	//show the overlay
	//update overlay with image linked in the link
	//Get child's alt attribute and set caption
//Add an overlay
	//an image
	//a caption
//When overlay is clicked 
	//Hide the overlay

//Perform (actually write code planned \ ecrire le code de ton projet)
//Capture the click even on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault(); //Stops the defult action of a particular element
	var imageLocation = $(this).attr("href");
	var caption  = $(this).children("img").attr("alt");
	$image.attr("src", imageLocation);
	$caption.text(caption);
	$($overlay).show();
});

//Add Overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p class="caption"></p>');
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
//When overlay is clicked 
	$overlay.click(function(){
		$overlay.hide();
	});
//Perfect (improve code \ faire ton code meilleur)

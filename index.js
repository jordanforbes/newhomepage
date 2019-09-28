$(document).ready(()=>{
//create a play button
//create a next button 
//play a song from a list 
	//alert("load");

	var x = 4


	$(".clickcheck").click(function(){
		console.log(x)
	})

	$(".clickme").click(function(){
		x=x-1
		console.log(x);
		$('.jukebox').append('test ');
	})
	$(".playbutton").click(()=>{
		console.log('play')
		$('.jukebox').append('<img src=\'assets/face.jpg\'></img>')
	})
});

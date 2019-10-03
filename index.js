$(document).ready(()=>{
//create a play button
//create a next button 
//play a song from a list 
	//alert("load");
	var x = 4

	var face = '<img src=\'assets/face.jpg\'></img>'

	var testWord= 'test '

	$(".clickcheck").click(function(){
		console.log(x)
	})

	$(".clickme").click(function(){
		x=x-1
		console.log(x);
		$('.jukePrint').append(testWord);
	})

	$(".clear").click(function(){
		console.log('clearbutton')
		
	})

	$(".playbutton").click(()=>{
		var fP= $('.facepic')

		// console.log(fP.css('display'))

		if (fP.css('display')=='none'){
			// console.log('none')
			fP.css('display','block')
		}else{
			fP.css('display','none')
			// console.log('block')
		}

		// fP.css('display', 'block')

		// console.log(fP.css('display'))
	})
});

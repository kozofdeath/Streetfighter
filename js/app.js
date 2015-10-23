/*
always wrap in a document.ready(functino() {
})

you have to listen for events! You can call functions to 
handle events and execute functions. 
	- mouseenter(function () {
	- mousedown
	- mouseleave
	- animate
	
	})

*/


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).ready(function() {
	
	function ryuCheck() { $(".ryu").mouseenter(function() {
		return true;
	})};

	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

	$(".ryu").mouseleave(function() {
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	});

	$(".ryu").mousedown(function() {
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		playHadouken();
		$(".hadouken").finish().show().animate(
			{'left' :'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
				//animation complete
			}
		);
	});

	$(".ryu").mouseup(function() {
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	});

	$(document).keydown(function(event) {
		var number = event.which;
		console.log(number);
		if (number === 88) {
			console.log(true)
			$('.ryu-cool').show()
			$('.ryu-ready').hide()
			$('.ryu-still').hide()
			$('.ryu-throwing').hide()
		}
	});

	$(document).keyup(function(event) {
		var number = event.which;
		console.log("keyup" + event.which)
		if (number === 88) {
			$('.ryu.cool').hide();
			$('.ryu-still').show();
		}
	})
});
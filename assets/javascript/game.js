$(document).ready(function() {

	var buttons = document.getElementById("button");
		buttons.innerHTML = '<img src="file:///C:/Users/ShaTo/Documents/UCF_BootCamp/week_5/week-4-homework/week-4-game/assets/images/blue%20crystal.png"/>';
		alert("you've clicked me!");
	var buttons = document.getElementById("button");
		buttons.innerHTML = '<img src="file:///C:/Users/ShaTo/Documents/UCF_BootCamp/week_5/week-4-homework/week-4-game/assets/images/yellow%20crystal.png"/>';
	var buttons = document.getElementById("button");
		buttons.innerHTML = '<img src="file:///C:/Users/ShaTo/Documents/UCF_BootCamp/week_5/week-4-homework/week-4-game/assets/images/green%20crystal.png"/>';
	var buttons = document.getElementById("button");
		buttons.innerHTML = '<img src="file:///C:/Users/ShaTo/Documents/UCF_BootCamp/week_5/week-4-homework/week-4-game/assets/images/red%20crystal.png"/>';
	// alert("hi");

//variable of counter and on click event
	var counter = 0;
	$(".crystal-image").on("click", function()
		{

//when the counter is clicked, it increases by the number 1.
	counter += 1;

//click the button will trigger an alert message.
	alert("you clicked on a crystal!");

	});


	</script>
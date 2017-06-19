

//intro window on page, start button

$(function() {

//when "start" button clicked, hide intro panel and show panel A
	$(".intro-form").on("submit", function(e){
		e.preventDefault();
		console.log('submitted');
		var myInput = $("#bandName").val();
		if (myInput !== ""){
			$("#bandName").val("");
			$("span.band").html(`${myInput}`);
			$(".intro").toggleClass("hidden");
			$("#panelA").toggleClass("show animated fadeInUp");
		}
		else {
			alert("Enter band name!");
		}
		
	});	

	

//panel A (THIS IS THE FORMAT FOR ALL PAN(N)EL CHOOSING)
//if user selects option1 + presses submit, panel A will be replaced by panel B
//if user selects option2 + presses submit, panel A will be replaced by panel C
	//panel A (beginning of adeventure)
	$(".submit-containerA a").on("click", function(e) {
		var option = $("input[name=option]:checked").val();
		e.preventDefault();
	//if option 1 is chosen, show panel B
		$("#panelA").removeClass("show");
		if (option === "option1"){
	// This is for the scroll to start at top of panel
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelB").toggleClass("show animated fadeInUp");
	//if option 2 is chosen, show panel C 	
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelC").toggleClass("show animated fadeInUp");
		}
		else {
	//if nothing selected, alert:
			alert("Pick an option!");
			$("#panelA").removeClass("animated fadeInUp");
			$("#panelA").toggleClass("show");

		}
	});


//panel B 
//if user selects option1 + presses submit, panel D will appear -> end panel
//if user selects option2 + presses submit, panel E will appear
	$(".submit-containerB a").on("click", function(e){
		var option = $("input[name=panelBOption]:checked").val();
		e.preventDefault();
		$("#panelB").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelD").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);			
			$("#panelE").toggleClass("show animated fadeInUp");
		}
		else{ 
			alert("Pick an option!");
			$("#panelB").removeClass("animated fadeInUp");
			$("#panelB").toggleClass("show");
		}
	});


//panel C
//if user selects option1 + presses submit, panel F will appear
//if user selects option 2 + presses submit, panel G will appear -> end panel
	$(".submit-containerC a").on("click", function(e){
		var option = $("input[name=panelCOption]:checked").val();
		e.preventDefault();
		$("#panelC").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelF").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelG").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option!");
			$("#panelC").removeClass("animated fadeInUp");
			$("#panelC").toggleClass("show");
		}
	});


//panel D
//if user presses "restart" button, intro window appears


//panel E
//if user selects option1 + presses submit, panel H will appear
//if user selects option2 + presses submit, panel I will appear
	$(".submit-containerE a").on("click", function(e){
		var option = $("input[name=panelEOption]:checked").val();
		e.preventDefault();
		$("#panelE").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelH").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelI").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option!");
			$("#panelE").removeClass("animated fadeInUp");
			$("#panelE").toggleClass("show");
		}
	});


//panel F
//if user selects option1 + presses submit, panel J will appear
//if user selects option2 + presses submit, panel K will appear -> end panel	
	$(".submit-containerF a").on("click", function(e){
		var option = $("input[name=panelFOption]:checked").val();
		e.preventDefault();
		$("#panelF").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelJ").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelK").toggleClass("show animated fadeInUp");
		}
		else{ 
			alert("Pick an option");
			$("#panelF").removeClass("animated fadeInUp");
			$("#panelF").toggleClass("show");
		}
	});



//panel G
//if user presses "restart" button, intro window appears


//panel H
//if user selects option1 + presses submit, panel L will appear
//if user selects option2 + presses submit, panel M will appear -> end panel
	$(".submit-containerH a").on("click", function(e){
		var option = $("input[name=panelHOption]:checked").val();
		e.preventDefault();
		$("#panelH").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelL").toggleClass("show animated fadeInUp");
		} else if (option === "option2") {
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelM").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option");
			$("#panelH").removeClass("animated fadeInUp");
			$("#panelH").toggleClass("show");
		}
	});



//panel I
//if user selects option1 + presses submit, panel M will appear -> end panel
//if user selects option2 + presses submit, panel N will appear 
	$(".submit-containerI a").on("click", function(e){
		var option = $("input[name=panelIOption]:checked").val();
		e.preventDefault();
		$("#panelI").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelM").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelN").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option");
			$("#panelI").removeClass("animated fadeInUp");
			$("#panelI").toggleClass("show");
		}
	});



//panel J
//if user selects option1 + presses submit, panel O will appear -> end panel
//if user selects option2 + presses submit, panel P will appear 
	$(".submit-containerJ a").on("click", function(e){
		var option = $("input[name=panelJOption]:checked").val();
		e.preventDefault();
		$("#panelJ").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelO").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelP").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option");
			$("#panelJ").removeClass("animated fadeInUp");
			$("#panelJ").toggleClass("show");
		}
	});



//panel K, L, and M
//if user presses "restart" button, intro window appears



//panel N
//if user selects option1 + presses submit, panel Q will appear -> end panel
//if user selects option2 + presses submit, panel R will appear -> happy end panel
	$(".submit-containerN a").on("click", function(e){
		var option = $("input[name=panelNOption]:checked").val();
		e.preventDefault();
		$("#panelN").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelQ").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelR").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option");
			$("#panelN").removeClass("animated fadeInUp");
			$("#panelN").toggleClass("show");
		}
	});


//panel O
//if user presses "restart" button, intro window appears


//panel P
//if user selects option1 + presses submit, panel S will appear -> end panel
//if user selects option2 + presses submit, panel T will appear -> happy end panel
	$(".submit-containerP a").on("click", function(e){
		var option = $("input[name=panelPOption]:checked").val();
		e.preventDefault();
		$("#panelP").removeClass("show");
		if (option === "option1"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelS").toggleClass("show animated fadeInUp");
		} else if (option === "option2"){
			$('html, body').animate({
				scrollTop: $('header').offset().top},
				1000);
			$("#panelT").toggleClass("show animated fadeInUp");
		}
		else{
			alert("Pick an option");
			$("#panelP").removeClass("animated fadeInUp");
			$("#panelP").toggleClass("show")
		}
	});

	 $('.tweak-input').checkRadioTweak();


});	















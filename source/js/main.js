$(document).ready(function(){

	// sticky menu
	$(".sticky-start").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});


	//mix it up
	var mixer = mixitup('.portfolio-items');

	//browser compability code



	$("a").on("click", function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;



      $("html", "body").animate(

        {

          scrollTop: $(hash).offset().top;

        },

        800,

        function () {

          window.location.hash = hash;

        } );

    }

  });



});

// open nav functionality
function openNav(){
	document.getElementById("myNav").style.width = "100%";
}

// close nav functionality
function closeNav(){
	document.getElementById("myNav").style.width = "0";
}
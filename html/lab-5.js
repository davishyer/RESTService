$("#zipInput").click(function(e)
{
	$( "#submitButton" ).fadeIn(1500);	
});

$("#submitButton").click(function(e)
{
	e.preventDefault();
	var weather;
	var url = "https://api.wunderground.com/api/d52cdd78ede50521/conditions/q/";
	var zipCode = $('#zipInput').val();
	if(zipCode.length != 5)
	{
		$('#zipInput').val("");
		$( "#submitButton" ).fadeOut(1500);
		alert("You need to enter a 5-digit zip code!");
		return;
	}
	$( "#submitButton" ).fadeOut(1500);
	url += zipCode;
	url += ".json";

	$.ajax({
		url : url,
		dataType : "jsonp",
		success : function(parsed_json) 
		{
			var location = parsed_json.current_observation.display_location.city;
			var temp_string = parsed_json.current_observation.temperature_string;
			weather = parsed_json.current_observation.weather;
			document.getElementById("bannerHeader").innerHTML = "Weather for " + location;
			everything = "<div>";
			everything += "<div id=\"temperature\">" + temp_string + "</div>";
			everything += "<div id=\"condition\">" + weather + "</div>";
			everything += "</div>";
			$("#weather").html(everything);
			changeBackground(weather);
		}
	});
});
function changeBackground(weather)
{
    console.log(weather);
	var array = weather.split(" ");
	weather = array[array.length - 1];
	switch(weather) 
	{
		case "Clear":
			$('#homeBanner').css("background-image", "url(Weather-Images/clear-sky.jpg)"); 
			break;
		case "Drizzle":
		case "Rain":
			$('#homeBanner').css("background-image", "url(Weather-Images/rain.jpg)");
		case "Shower":
			$('#homeBanner').css("background-image", "url(Weather-Images/rain.jpg)");
		case "Mist":
			$('#homeBanner').css("background-image", "url(Weather-Images/mist.jpg)");
			break;
		case "Snow":
			$('#homeBanner').css("background-image", "url(Weather-Images/snow.jpg)");
			break;
		case "Haze":
			$('#homeBanner').css("background-image", "url(Weather-Images/haze.jpg)");
			break;
		case "Cloudy":
		case "Clouds":
			$('#homeBanner').css("background-image", "url(Weather-Images/clouds.jpg)");
			break;
		case "Fog":
			$('#homeBanner').css("background-image", "url(Weather-Images/fog.jpg)");
			break;
		case "Overcast":
			$('#homeBanner').css("background-image", "url(Weather-Images/overcast.jpg)");
			break;
		default:
			break;
	}
}



///////////////////////////////		
// Mobile Detection
///////////////////////////////

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}

///////////////////////////////
// Project Filtering 
///////////////////////////////

function projectFilterInit() {
	$('#filterNav a').click(function(){
		var selector = $(this).attr('data-filter');	
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		if(selector == 'all') {
			$('#projects .thumbs .project.inactive .inside').fadeIn('slow').removeClass('inactive').addClass('active');
		} else {
			$('#projects .thumbs .project').each(function() {
				if(!$(this).hasClass(selector)) {
					$(this).removeClass('active').addClass('inactive');
					$(this).find('.inside').fadeOut('normal');
				} else {
					$(this).addClass('active').removeClass('inactive');
					$(this).find('.inside').fadeIn('slow');
				}
			});
		}		
	
		if ( !$(this).hasClass('selected') ) {
			$(this).parents('#filterNav').find('.selected').removeClass('selected');
			$(this).addClass('selected');
		}
	
		return false;
	});		
}

///////////////////////////////
// Project thumbs 
///////////////////////////////

function projectThumbInit() {
	
	if(!isMobile()) {		
	
		$(".project.small .inside a").hover(
			function() {
				$(this).find('img:last').stop().fadeTo("fast", .1);
				$(this).find('img:last').attr('title','');	
			},
			function() {
				$(this).find('img:last').stop().fadeTo("fast", 1);	
		});
			
		$(".project.small .inside").hover(	
			function() {				
				$(this).find('.title').stop().fadeTo("fast", 1);
				$(this).find('img:last').attr('title','');				
			},
			function() {				
				$(this).find('.title').stop().fadeTo("fast", 0);							
		});
		
	}
	
	$(".project.small").css("opacity", "1");	
}

///////////////////////////////
// Parallax
///////////////////////////////

// Calcualte the home banner parallax scrolling
  function scrollBanner() {
    //Get the scoll position of the page
    scrollPos = $(this).scrollTop();

    //Scroll and fade out the banner text
    $('#bannerText').css({
      'margin-top' : -(scrollPos/3)+"px",
      'opacity' : 1-(scrollPos/300)
    });
	
    //Scroll the background of the banner
    $('#homeBanner').css({
      'background-position' : 'center ' + (-scrollPos/8)+"px"
    });    
  }


///////////////////////////////
// Initialize
///////////////////////////////	
	
// $.noConflict();
$(document).ready(function(){
	
	if(!isMobile()) {
		$(window).scroll(function() {	      
	       scrollBanner();	      
		});
	}
	projectThumbInit();	
	projectFilterInit();	
});

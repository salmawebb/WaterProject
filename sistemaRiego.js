var accessToken = "4d0fc494bd7211e80d7f7cf68b68125422667e10";
var deviceID = "390063001851373237343331"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/dispensador";

function switchOn()
{
	$.post(url, {params: "Open", access_token: accessToken });
}  

function switchOff()
{
	$.post(url, {params: "Close", access_token: accessToken });
}  

//poner el tiempo
function setTimer()
{
	
		var combo2 = document.getElementById("minutos");
		var selected2 = combo2.options[combo2.selectedIndex].text;

		if (selected2 != 0) {
			console.log(selected2);	
		}

		var combo = document.getElementById("hora");
		var selected = combo.options[combo.selectedIndex].text;

		if (selected != 0) {
			console.log(selected);	
		}

		

		
}
	
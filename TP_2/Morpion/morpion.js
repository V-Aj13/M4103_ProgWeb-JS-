console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	$('#morpion td').mousedown(function()
		{
			console.log("Le bouton de la souris a été enfoncé.");
			$(this).text('X');
		});
	console.log("La mise en place est finie. En attente d'événements...");
});
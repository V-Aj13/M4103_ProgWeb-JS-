console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	var joueur="X";

	$('#morpion td').mousedown(function()
		{
			console.log("Le bouton de la souris a été enfoncé.");
			if($(this).text()!==''){return;}
			$(this).text(joueur);
			joueur=(joueur==="X" ? 'O' : 'X');
		});

	console.log("La mise en place est finie. En attente d'événements...");
});


console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est pret");
	$('#pages').change(function()
	{
		console.log($('#pages').val());
	});
});
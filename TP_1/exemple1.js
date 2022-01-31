console.log("Ce programme JS vient d'être chargé");
$(document).ready(function () {
  $("h1").click(function () {
    console.log("L'utilisateur a cliqué sur h1");
    $("p").text("Bonjour!");
    $("p").css("color", "red"); //to another css re-use line
    $("p").css("font-size", "12px");
  });
  console.log("La mise en place est finie. En attente d'événements...");
});

$(document).ready(function () {
  console.log("Le document est prêt");

  $("p").click(function () {
    console.log("Le bouton a été cliqué");
    if ($("input").val() === "cacher") {
      $("img").hide();
      $("input").val("montrer");
    } else {
      $("img").show();
      $("input").val("cacher");
    }
  });
  console.log("La mise en place est finie. En attente d'événements...");
});

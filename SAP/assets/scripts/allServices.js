$(document).ready(function(){
  var allServices = new Object();

  $.ajax({
    url: 'http://localhost:3030/main/favourites',
    contentType: "application/json",
    complete: function(data) {
      var jsonData = JSON.parse(data.responseText)

      allServices.nodes  = jsonData[0].favourites.nodes[0];
      allServices.edges = jsonData[0].favourites.edges[0];

      //functions to build graph (arborjs)
      var sys = arbor.ParticleSystem(10000, 400, 1);
      sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
      sys.renderer = Renderer("#viewport") ;
      sys.graft(allServices);
    }
  });

});

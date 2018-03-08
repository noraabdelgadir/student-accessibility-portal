$(document).ready(function(){
  var sys = arbor.ParticleSystem(1000, 400, 1);
  sys.parameters({gravity: true});
  sys.renderer = Renderer("#viewport");

  // sample categories and its services
  var data = {
     nodes : {
       category: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
       service1: {'color': '#008BB0', 'shape': 'square', 'label': 'verification of illiness'},
       service2:{'color': '#008BB0', 'shape': 'square', 'label': 'letter of accomodation'},
       service3:{'color': '#008BB0', 'shape': 'square', 'label': 'Saved'},
     },
     edges:{
       category: {service1:{length:0.4}, service2:{length:0.4}, service3:{length:0.4},
              service4:{length:0.4}, service5:{length:0.4}, service6:{length:0.4}}
     }
   };
  sys.graft(data);
});

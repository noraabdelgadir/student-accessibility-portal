$(document).ready(function(){
  var sys = arbor.ParticleSystem(1000, 400, 1);
  sys.parameters({gravity: true});
  sys.renderer = Renderer("#viewport");

  // sample categories and its services
  var data = {
     nodes : {
       category: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'category'},
       service1: {'color': '#008BB0', 'shape': 'square', 'label': 'service1'},
       service2:{'color': '#008BB0', 'shape': 'square', 'label': 'service2'},
       service3:{'color': '#008BB0', 'shape': 'square', 'label': 'service3'},
       service4:{'color': '#008BB0', 'shape': 'square', 'label': 'service4'},
       service5:{'color': '#008BB0', 'shape': 'square', 'label': 'service5'},
       service6:{'color': '#008BB0', 'shape': 'square', 'label': 'service6'}
     },
     edges:{
       category: {service1:{length:0.4}, service2:{length:0.4}, service3:{length:0.4}, 
              service4:{length:0.4}, service5:{length:0.4}, service6:{length:0.4}}
     }
   };
  sys.graft(data);
});

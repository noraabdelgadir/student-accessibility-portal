$(document).ready(function(){
  var sys = arbor.ParticleSystem(1000, 400, 1);
  sys.parameters({gravity:true});
  sys.renderer = Renderer("#viewport") ;
  var data = {
     nodes : {
       category: {'color': '#002A5C', 'shape': 'dot', 'label': 'category'},
       service1: {'color': '#008BB0', 'shape': 'square', 'label': 'service1'},
       service2:{'color': '#008BB0', 'shape': 'square', 'label': 'service2'},
       service3:{'color': '#008BB0', 'shape': 'square', 'label': 'service3'},
       service4:{'color': '#008BB0', 'shape': 'square', 'label': 'service4'},
       service5:{'color': '#008BB0', 'shape': 'square', 'label': 'service5'},
       service6:{'color': '#008BB0', 'shape': 'square', 'label': 'service6'}
     },
     edges:{
       category: {service1:{}, service2:{}, service3:{}, service4:{},
                        service5:{}, service6:{}}
     }
   };
  sys.graft(data);

  $("canvas").mousedown(function(e) {
      var pos = $(this).offset();
      var p = {x:e.pageX-pos.left, y:e.pageY-pos.top}
      selected = nearest = dragged = sys.nearest(p);

      if (selected.node == "service1") { // doesn't work
        var s1 = {
          nodes : {
            description:{'color': '#000000', 'shape': 'square', 'label': 'description'}
          },
          edges :{
            service1: {description:{}}
          }
        };
        sys.graft(s1);
      }
      return false;
  });
});

$(document).ready(function(){
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
  sys.renderer = Renderer("#viewport");

  // sample categories and its services
  var data = {
     nodes : {
<<<<<<< HEAD
       category: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Note Taking'},
       service1: {'color': '#008BB0', 'shape': 'square', 'label': 'Request Notetaking'},
       service2: {'color': '#008BB0', 'shape': 'square', 'label': 'Volunteer'},
       service4: {'color': '#008BB0', 'shape': 'square', 'label': 'View Notes'},
       service8: {'color': '#008BB0', 'shape': 'square', 'label': 'Contact'}
     },
     edges: {
       category: {service1:{}, service2:{}, service4:{}, service8:{}}
=======
       category: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
       service1: {'color': '#008BB0', 'shape': 'square', 'label': 'verification of illiness'},
       service2:{'color': '#008BB0', 'shape': 'square', 'label': 'letter of accomodation'},
       service3:{'color': '#008BB0', 'shape': 'square', 'label': 'Saved'},
     },
     edges:{
       category: {service1:{length:0.4}, service2:{length:0.4}, service3:{length:0.4}}
>>>>>>> 0f49dae42c316fb42693a39819c7935d938a20a1
     }
   };
  sys.graft(data);

  setTimeout(function(){
    var volunteer = {
      nodes: {
        service3: {'color': '#008BB0', 'shape': 'square', 'label': 'Upload Notes', 'parent': 'service2'},
        service5: {'color': '#008BB0', 'shape': 'square', 'label': 'Procedures', 'parent': 'service2'}
      },
      edges: {
        service2: {service3:{length:0.6}, service5:{}}
      }
    };
    sys.graft(volunteer);

    var request = {
      nodes: {
        service6: {'color': '#008BB0', 'shape': 'square', 'label': 'View Courses', 'parent':'service1'},
        service7: {'color': '#008BB0', 'shape': 'square', 'label': 'Add Courses', 'parent':'service1'}
      },
      edges: {
        service1: {service6:{}, service7:{}}
      }
    }
    sys.graft(request);
  },1000);
});


//service1: {service6:{}, service7:{}},
//service2: {service9:{}, service3:{}, service5:{}}

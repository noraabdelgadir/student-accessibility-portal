$(document).ready(function(){
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
  sys.renderer = Renderer("#viewport") ;
  var allServices = {
        nodes:{
          center:{'mass':'.1','color':'#00215C','shape':'dot','label':'Student Name','size':''},
          cat1:{'mass':'1','color':'#008BB0','shape':'dot','label':'Counsellors','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=documents'},
          cat2:{'mass':'1','color':'#008BB0','shape':'dot','label':'Test and Exam Accomodation'},
          cat3:{'mass':'1','color':'#008BB0','shape':'dot','label':'Note Taking'},
          cat5:{'mass':'1','color':'#008BB0','shape':'dot','label':'Documents','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=documents'},
          letterOfAccommodation:{'color': '#008BB0', 'shape': 'square', 'label': 'letter of accomodation'}
        },
        edges:{
          center:{ cat1:{length:0.5}, cat2:{}, cat3:{length:0.5}, cat5:{length:0.5} },
          cat5:{ letterOfAccommodation:{} }
        }
      };
  sys.graft(allServices);
});

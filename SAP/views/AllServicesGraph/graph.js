$(document).ready(function(){
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
  sys.renderer = Renderer("#viewport");
  var allServices = {
        nodes:{
          center:{'mass':'3','color':'#00215C','shape':'dot','label':'All Accessibility Services'},
          cat1:{'mass':'1','color':'#008BB0','shape':'dot','label':'Counsellors','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=counsellors'},
          cat2:{'mass':'1','color':'#008BB0','shape':'dot','label':'Test and Exam Accomodation'},
          cat3:{'mass':'1','color':'#008BB0','shape':'dot','label':'Note Taking'},
          cat4:{'mass':'1','color':'#008BB0','shape':'dot','label':'Building Accessibility'},
          cat5:{'mass':'1','color':'#008BB0','shape':'dot','label':'Documents','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=documents'}
        },
        edges:{
          center:{ cat1:{length:0.5}, cat2:{length:0.5}, cat3:{length:0.5}, cat4:{length:0.5}, cat5:{length:0.5} }
        }
      };
  sys.graft(allServices);
});

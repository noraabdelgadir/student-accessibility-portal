$(document).ready(function(){
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
  sys.renderer = Renderer("#viewport") ;
  var allServices = {
        nodes:{
          all:{'mass':'3','color':'#00215C','shape':'dot','label':'All Accessibility Services','fixed':'true'},
          cat1:{'mass':'1.5','color':'#008BB0','shape':'dot','label':'Counsellors'},
          cat2:{'mass':'1','color':'#008BB0','shape':'dot','label':'Test and Exam Accomodation', link:'http://stackoverflow.com'},
          cat3:{'mass':'1','color':'#008BB0','shape':'dot','label':'Note Taking'},
          cat4:{'mass':'2','color':'#008BB0','shape':'dot','label':'Building Accessibility'}
        },
        edges:{
          all:{ cat1:{'length':'0.75','weight':'0.75'}, cat2:{length:0.60}, cat3:{length:0.5}, cat4:{length:0.5} }
        }
      };
  sys.graft(allServices);
});

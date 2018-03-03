$(document).ready(function(){
  var sys = arbor.ParticleSystem(1000, 400, 1);
  sys.parameters({repulsion: 1000, gravity: true, dt: 0.35});
  sys.renderer = Renderer("#viewport") ;
  var allServices = {
        nodes:{
          all:{'mass':'1','color':'#00215C','shape':'dot','label':'Student Name'},
          cat1:{'mass':'0.5','color':'#008BB0','shape':'dot','label':'Category 1'},
          cat2:{'color':'#008BB0','shape':'dot','label':'Category 2', link:'http://stackoverflow.com'},
          cat3:{'color':'#008BB0','shape':'dot','label':'Category 3'}
        },
        edges:{
          all:{ cat1:{length:0.5}, cat2:{length:0.5}, cat3:{length:0.5} }}
      };
  sys.graft(allServices);
});

$(document).ready(function(){
  var sys = arbor.ParticleSystem(1000, 400, 1);
  sys.parameters({gravity:true});
  sys.renderer = Renderer("#viewport") ;
  var data = {
        nodes:{
          animals:{'color':'red','shape':'dot','label':'Animals'},
          dog:{'color':'green','shape':'dot','label':'dog'},
          cat:{'color':'blue','shape':'dot','label':'cat'}
        },
        edges:{
          animals:{ dog:{}, cat:{} }}
      };
  sys.graft(data);
});

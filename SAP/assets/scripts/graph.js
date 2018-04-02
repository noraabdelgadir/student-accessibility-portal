$(document).ready(function() {
  var allServices = new Object();
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
  sys.renderer = Renderer("#viewport");
  var allServices = {
        nodes:{
          center:{mass:'3',color:'#00215C',shape:'dot',label:'All Accessibility Services'},
          cat1:{'mass':'1','color':'#008BB0','shape':'dot','label':'Counsellors','link':'/category?category=counsellors'},
          cat2:{'mass':'1','color':'#008BB0','shape':'dot','label':'Test and Exam Accommodation','link':'/category?category=test'},
          cat3:{'mass':'1','color':'#008BB0','shape':'dot','label':'Note Taking','link':'/category?category=notes'},
          cat4:{'mass':'1','color':'#008BB0','shape':'dot','label':'Building Accessibility','link':'/category?category=build'},
          cat5:{'mass':'1','color':'#008BB0','shape':'dot','label':'Documents','link':'/category?category=documents'}
        },
        edges:{
          center:{ cat1:{length:0.5}, cat2:{length:0.5}, cat3:{length:0.5}, cat4:{length:0.5}, cat5:{length:0.5} }
        }
      };
  var center = {
    nodes:{center:{mass:'3',color:'#00215C',shape:'dot',label:'All Accessibility Services'}}
  }

  sys.graft(center);
  $.ajax({
    url: 'http://localhost:3030/services',
    contentType: "application/json",
    complete: function(data) {
      var filtered = JSON.parse(JSON.stringify(allServices));
      $( "input[type=checkbox]" ).on( "click", function () {
          var n = $("input:checked");
          filtered = JSON.parse(JSON.stringify(allServices));
          var checked = []
          $.each(n, function (index, value) {
            checked.push(value.value);
          });
          var nodes = allServices.nodes;
          for (var key in nodes) {
            if(!checked.includes(nodes[key].label) && key != "center") {
              delete (filtered.nodes)[key];
              delete (filtered.edges)["center"][key];
            }
          }
          var sys = arbor.ParticleSystem(10000, 400, 1);
          sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
          sys.renderer = Renderer("#viewport");
          sys.graft(filtered);
      });
    }
  });
});

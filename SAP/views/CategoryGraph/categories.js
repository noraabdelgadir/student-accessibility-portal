$(document).ready(function(){
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
  sys.renderer = Renderer("#viewport");

  // adopted from http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
  function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
  }

  function addServices(cat){
    if (cat == 'documents') {
      var data = {
         nodes : {
           middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
           verificationOfIlliness: {'color': '#008BB0', 'shape': 'square', 'label': 'verification of illiness'},
           letterOfAccomodation:{'color': '#008BB0', 'shape': 'square', 'label': 'letter of accomodation'},
           saved:{'color': '#008BB0', 'shape': 'square', 'label': 'Saved'},
         },
         edges:{
           middleNode: {verificationOfIlliness:{length:0.4}, letterOfAccomodation:{length:0.4},
                  saved:{length:0.4}}
         }
       };
      sys.graft(data);
    }
    else if (cat == 'counsellors') {
      var data = {
         nodes : {
           middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Counsellors'},
           learningStrategist: {'color': '#008BB0', 'shape': 'square', 'label': 'Learning Strategist'},
           adaptiveTechnologist:{'color': '#008BB0', 'shape': 'square', 'label': 'Adaptive Technologist'},
           accessibilityAdvisors:{'color': '#008BB0', 'shape': 'square', 'label': 'Accessibility Advisors'},
         },
         edges:{
           middleNode: {learningStrategist:{}, adaptiveTechnologist:{}, accessibilityAdvisors:{}}
         }
       };
      sys.graft(data);
    }
    else if (cat == 'notes') {
      var data = {
         nodes : {
           middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Note Taking'},
           notesDownload: {'color': '#008BB0', 'shape': 'square', 'label': 'Download Notes'},
           notesInfo:{'color': '#008BB0', 'shape': 'square', 'label': 'Information'},
           notesRequest:{'color': '#008BB0', 'shape': 'square', 'label': 'Request for notes'},
         },
         edges:{
           middleNode: {notesDownload:{}, notesInfo:{}, notesRequest:{}}
         }
       };
      sys.graft(data);
    }

    else if (cat == 'tests') {
      var data = {
         nodes : {
           middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Accomodations'},
           testRequest: {'color': '#008BB0', 'shape': 'square', 'label': 'Request'},
           lateRequest:{'color': '#008BB0', 'shape': 'square', 'label': 'Late Request'},
           testInfo:{'color': '#008BB0', 'shape': 'square', 'label': 'Information'},
         },
         edges:{
           middleNode: {testInfo:{}, lateRequest:{}, testRequest:{}}
         }
       };
      sys.graft(data);
    }
  }
  var category = GetURLParameter('category');
  addServices(category);


});

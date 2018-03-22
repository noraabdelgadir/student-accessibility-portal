$(document).ready(function() {
  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: false, dt: 0.35});
  sys.renderer = Renderer("#viewport");

  // loading the descriptions of the services

  // Documents
  $("#Letter-of-Accommodation").load("../../txtFiles/letterOfAccommodation.txt");
  $("#Verification-of-Illness").load("../../txtFiles/verificationOfIllness.txt");
  $("#Accommodation-Renewal").load("../../txtFiles/accommodationRenewal.txt");

  // Notes
  $("#Volunteer").load("../../txtFiles/volunteer.txt");
  $("#Upload-Notes").load("../../txtFiles/uploadNotes.txt");
  $("#Request-Note-Taking").load("../../txtFiles/requestNotetaking.txt");

  // Counsellors
  $("#Adaptive-Technologist").load("../../txtFiles/adaptiveTechnologist.txt");
  $("#Learning-Strategist").load("../../txtFiles/learningStrategist.txt");
  $("#Accessibility-Advisors").load("../../txtFiles/accessibilityAdvisor.txt");

  // Test and Exam Accommodation
  

  // $("#").load("../../txtFiles/.txt");

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

  var data = {
     nodes : {
       middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
       child1: {'color': '#008BB0', 'shape': 'square', 'label': 'Verification of Illness'},
       child2:{'color': '#008BB0', 'shape': 'square', 'label': 'Letter of Accommodation'},
       child3:{'color': '#008BB0', 'shape': 'square', 'label': 'Accommodation Renewal'},
     },
     edges:{
       middleNode: {child1:{length:0.4}, child2:{length:0.4},
              child3:{length:0.4}}
     }
   };
  sys.graft(data);

  function addServices(cat){
    if (cat == 'documents') {
      var data = {
         nodes : {
           middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
           child1: {'color': '#008BB0', 'shape': 'square', 'label': 'Verification of Illness'},
           child2:{'color': '#008BB0', 'shape': 'square', 'label': 'Letter of Accomodation'},
           child3:{'color': '#008BB0', 'shape': 'square', 'label': 'Saved'},
         },
         edges:{
           middleNode: {child1:{length:0.4}, child2:{length:0.4},
                  child3:{length:0.4}}
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
  }
  var category = GetURLParameter('category');
  //addServices(category);


});

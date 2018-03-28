$(document).ready(function() {
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

<<<<<<< HEAD:SAP/views/CategoryGraph/categories.js
  var category = new Object();


  $.ajax({
    url: 'http://localhost:3030/category/:name',
    contentType: "application/json",
    complete: function(data) {
      var jsonData = JSON.parse(data.responseText)

      allServices.nodes  = jsonData[0].favourites.nodes[0];
      allServices.edges = jsonData[0].favourites.edges[0];

      //functions to build graph (arborjs)
      var sys = arbor.ParticleSystem(10000, 400, 1);
      sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
      sys.renderer = Renderer("#viewport") ;
      sys.graft(allServices);
    }
  });


=======
  // Test and Exam Accommodation

  //get the name of the category
  var categoryName = GetURLParameter('category');
  console.log(categoryName)

  $.ajax({
    url: 'http://localhost:3030/category/load/' + categoryName,
    method: 'GET',
    contentType: "application/json",
    success: function(data) {
      // var jsonData = JSON.parse(data.responseText);

      // var category = new Object();
      // category.nodes  = jsonData[0].nodes;
      // category.edges = jsonData[0].edges;
      var category = new Object();
      category.nodes  = data.nodes;
      category.edges = data.edges;
      console.log(data);

      //functions to build graph (arborjs)
      var sys = arbor.ParticleSystem(10000, 400, 1);
      sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
      sys.renderer = Renderer("#viewport");
      sys.graft(category);
    }
  })
>>>>>>> b742bd4c6550444aa8537cdd208421c650dc64e2:SAP/assets/scripts/categories.js

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

  // var data = {
  //    nodes : {
  //      middleNode: {'mass':'1', 'color': '#002A5C', 'shape': 'dot', 'label': 'Documents'},
  //      child1: {'color': '#008BB0', 'shape': 'square', 'label': 'Verification of Illness'},
  //      child2:{'color': '#008BB0', 'shape': 'square', 'label': 'Letter of Accommodation'},
  //      child3:{'color': '#008BB0', 'shape': 'square', 'label': 'Accommodation Renewal'},
  //    },
  //    edges:{
  //      middleNode: {child1:{length:0.4}, child2:{length:0.4},
  //             child3:{length:0.4}}
  //    }
  //  };
  // sys.graft(data);

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
  //addServices(category);


});


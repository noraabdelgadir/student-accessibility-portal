$(document).ready(function(){
<<<<<<< HEAD

  $.ajax({
    url: 'http://localhost:3030/main/favourites',
    contentType: "application/json",
    sucess: function(data) {
      //console.log(data);
      console.log(data.responseText);
    }
  });
=======
  var curUser= "default";
>>>>>>> csc301-winter-2018/master

  var sys = arbor.ParticleSystem(10000, 400, 1);
  sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
  sys.renderer = Renderer("#viewport") ;

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", 'http://localhost:3030/curUser', false);
  var curUser = rawFile.responseText;

  $.ajax({
    type: "GET",
    async: false,
    url: "http://localhost:3030/curUser",
    data: "",
    success:function(data){
      curUser = data;
    }
  });


  // console.log(curUser);
  var allServices = {
        nodes:{
          center:{'mass':'.1','color':'#00215C','shape':'dot','label':curUser},
          cat1:{'mass':'1','color':'#008BB0','shape':'dot','label':'Counsellors','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=counsellors'},
          cat2:{'mass':'1','color':'#008BB0','shape':'dot','label':'Test and Exam Accomodation','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=tests'},
          cat3:{'mass':'1','color':'#008BB0','shape':'dot','label':'Note Taking','link':'http://localhost:3030/views/CategoryGraph/categories.html?category=notes'},
        },
        edges:{
          center:{ cat1:{length:0.4}, cat2:{}, cat3:{length:0.4} }}
      };
  sys.graft(allServices);
});

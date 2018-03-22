function checkLogin(form){

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", 'http://localhost:3030/user', false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
              var allText = rawFile.responseText;

              // now display on browser :
              console.log(allText);
              obj = JSON.parse(allText);
              console.log(obj);



          }
      }
  }
  rawFile.send(null);
  var flag = false;

  for(var user in obj){
    console.log("here");
    console.log(obj[user]['utorid']);
    console.log(obj[user]['password']);

    if (obj[user]['utorid'] == form.username.value){
      if(form.password.value == obj[user]['password']){
        flag = true;

        // ajax
        var userStr = "http://localhost:3030/curuser/" + form.username.value;
        $.ajax({
          type: "GET",
          url: userStr,
          success:function(data){
            console.log("yay");
          }
        });

        window.open('../PersonalGraph/main.html',"_self")
      }
    }
  }

  // for (var i = 0, len = obj.length; i < len; ++i) {
  //   var user = obj[i].userName;
  //   var pw = obj[i].password;
  //
  //   if (form.username.value == user && form.password.value == pw){
  //     flag = true;
  //     window.open('../AllServicesGraph/allServices.html',"_self")
  //   }
  //
  // }

  if (flag == false){
    alert("please enter the correct username and password");
  }

}

function checkLogin(form){

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", 'http://127.0.0.1:3030/all', false);
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

  // checking password goes here now

  if(obj.hasOwnProperty(form.username.value)){
    if (obj[form.username.value]["password"] == form.password.value){
      flag = true;
      window.open('../PersonalGraph/main.html',"_self")
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

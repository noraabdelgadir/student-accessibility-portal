function checkLogin(form){
  if (form.username.value == "guest" && form.password.value == "guest"){
    window.open('../AllServicesGraph/allServices.html',"_self")
  }
  else{
    alert("please enter the correct username and password")
  }
}

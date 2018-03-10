
function checkSignUp(form){
var firstName = form.firstName.value;
var lastName = form.lastName.value;
var userName = form.userName.value;
var password = form.password.value;

if (firstName == '' || lastName == '' || userName == '' || password == ''){
  alert("please fill in every field");
}

else {
  var userStr = "/add/" + userName + "/" + password + "/" + firstName + "/" + lastName

  console.log(userStr);

  var pop = window.open(userStr, "Popup", "height=1, width=1, status=no, toolbar=no, menubar=no, location=no, top = 100000, left=100000 ");
  pop.close();

  if (window.confirm("Great! your account has been made!")){
    window.location = 'index.html';
  }
  else {
    die();
  }


}


}

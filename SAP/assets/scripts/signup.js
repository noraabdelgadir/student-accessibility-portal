function checkSignUp(form){
var firstName = form.firstname.value;
var lastName = form.lastname.value;
var userName = form.utorid.value;
var newpassword = form.password.value;

$.ajax({
        url: 'http://localhost:3030/register',
        method: 'POST',
        data: {utorid: userName, firstname: firstName, lastname :lastName, password: newpassword},
        success: (result) => {
          alert("The account has been created")
          window.open('http://localhost:3030/',"_self")
        },
        error: () => {
          // don't do anything yet
          alert("bad")
        }
    })

}

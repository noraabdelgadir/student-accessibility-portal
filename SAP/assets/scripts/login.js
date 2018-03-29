function checkLogin(form){
  var userName = form.username.value;
  var newpassword = form.password.value;

  $.ajax({
          url: 'http://localhost:3030/login',
          method: 'POST',
          data: {username: userName, password: newpassword},
          success: (result) => {
            alert("You've been login")
            window.open('http://localhost:3030/main',"_self")
          },
          error: (xhr) => {
            // don't do anything yet
            if (xhr.status == 404){
              alert("You have enter the wrong username or password.")
            }
          }
      })

}

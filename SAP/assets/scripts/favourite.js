function favourite(cat){

  $.ajax({
        url: "http://localhost:3030/category/favourite",
        type: "POST",
        data: {newcat : cat},
        success: (result) => {
          console.log("yay fav")
        },
        error: (xhr) => {
          // don't do anything yet
          if (xhr.status == 404){
            alert("You have already favourited this.")
          }
          else {
            alert("The request is blocked.")
          }
        }
    })

}


function unfavourite(cat){

  $.ajax({
        url: "http://localhost:3030/category/unfavourite",
        type: "POST",
        data: {newcat : cat},
        success: (result) => {
          console.log("yay unfav")
        },
        error: (xhr) => {
          // don't do anything yet
          if (xhr.status == 404){
            alert("You have not favourite this item yet.")
          }
          else {
            alert("The request is blocked.")
          }
        }
    })

}


hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
    switch(s) {
  case "Log in":
    ChangeForm(loginForm)
    break
case "Fave Foods":
  ChangeForm(faveFoods)
  break
case "Dessert Voting":
  ChangeForm(dessertVoting)
  break
case "Describing You":
  ChangeForm(describeYou)
  break
case "Exercise Knowledge":
  ChangeForm(favExercises)
  break
    }
  }
}





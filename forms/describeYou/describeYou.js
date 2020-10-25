//radio button onclick function
rdoChoose.onclick=function(){
  let userChoice = $("input[name=rdoChoose]:checked").prop("value")
  console.log(`${userChoice}`)
  lblOut.value = `I would agree that you are a/an ${userChoice} person too!`
}

//next form button onclick function
btnNext.onclick=function(){
  ChangeForm(favExercises)
}

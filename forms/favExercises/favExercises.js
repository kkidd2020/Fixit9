/*Complete the favExercises.onshow event handler so it populates the select list from both the 'exercises' and 'coreExercises' arrays when the form loads/starts. 
Add a button so when the user has chosen their two exercises, it shows them in a control that uses this format: 
        You chose situps and pushups. 
Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the mobileNav page. 
*/
let selectChoices = []
let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

favExercises.onshow=function(){
selExercises.clear()   
  for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
  for (i = 0; i <= coreExercises.length - 1; i++) 
        selExercises.addItem(coreExercises[i])
}


selExercises.onfocusout=function(s){
if (typeof(s) == "object") {
      return                    
    } else {
        selExercises.value = s
        selectChoices.push(s) /*Put s into the selectChoices array*/
  }
}

btnSubmit.onclick=function(){
  let message = "You chose:" 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + selExercises.text[i] + " "
  lblMessageExercise.value = message
}

btnNextPage.onclick=function(){
  ChangeForm(mobileNav)
}

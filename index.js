const madlib = {}


function setMadlibObject() {
  let nodeArray = document.querySelectorAll("form input")
  nodeArray.forEach(element => {
    madlib[element.id] = element.value
  });
}

//get the values from the text boxes for the madlib
function setMadlib() {
  setMadlibObject()
//put madlib values in the paragraph
  if (checkForBlanks() === false) {
    alert("Don't leave any text boxes blank!")
    return false
  } else {
    let madlibText = `Hi my name is ${madlib.name}. I am very ${madlib.adjective}. My most precious possesion is my ${madlib.item}. 
    My favorite food is ${madlib.food}.`
  //append madlib to div
    const madlibParagraph = document.createElement("p")
    madlibParagraph.innerHTML = madlibText
    document.querySelector("#madlib").appendChild(madlibParagraph)
  }
}

function checkForBlanks() {
  for (key in madlib) {
    if (madlib[key].length < 1) {
      return false
      break;
    } 
  }
  return true;
}



//variables to check for hidden password
//counter for index of password
let i = 0;
//empty array, appends letters as they are typed correctly, clears arrays if they're incorrect
let secret = [];
let password = "lovelace"
//if secertFound is true, display will drastically change
let secretFound = false

//listens for someone to type "lovelace"
document.addEventListener("keydown", passwordVerification)

function passwordVerification(e) {
  verify(e)
  if (secret.join("") === password) {
    console.log("Change the whole page.")
    secretFound = true
    changeEverything()
  }
}  

//uses global variables to spell out password in the array
function verify(e) {
  if (e.key === password[i]) {
    secret.push(e.key);
    i += 1
    return true
  } else {
    secret = []
    i = 0
    return false
  }
}

//when password is typed change things
function changeEverything() {
  if (secretFound === true) {
    document.querySelector("#question").innerHTML="Ada LoveLace!"
    document.querySelector("body").style.backgroundColor = "green"
    document.querySelector("img").src = "https://www.bbvaopenmind.com/wp-content/uploads/2015/12/Ada_Lovelace_Chalon_portrait-1-1024x1024-1.jpg"
  }
}
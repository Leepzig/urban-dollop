const madlib = {}


function setMadlib() {
  madlib.name = document.querySelector("#name").value
  madlib.adjective = document.querySelector("#adjective").value
  madlib.item = document.querySelector("#item").value
  madlib.food = document.querySelector("#food").value

  let madlibText = `Hi my name is ${madlib.name}. I am very ${madlib.adjective}. My most precious possesion is my ${madlib.item}. 
  My favorite food is ${madlib.food}.`

  const madlibParagraph = document.createElement("p")
  madlibParagraph.innerHTML = madlibText
  document.querySelector("#madlib").appendChild(madlibParagraph)
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

function changeEverything() {
  if (secretFound === true) {
    document.querySelector("body").style.backgroundColor = "black"
  }
}
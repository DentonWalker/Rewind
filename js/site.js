// get the string from the page
//Controller Function
function getValue() {
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  let revString = reverseString(userString);

  displayString(revString);
}

//Reverse the string
//Logic Function
function reverseString(userString) {
  let revString = [];

  //let name = Lane
  //name[0] = "L";
  //name[3] = "e";
  //last position in an array is name.length - 1

  // reverse a string using a for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  return revString;
}

//Display the reversed string to the user
//View Function
function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: ${revString}`;

  //show alert box
  document.getElementById("alert").classList.remove("invisible");
}

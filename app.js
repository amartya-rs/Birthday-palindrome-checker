var button = document.querySelector(".check-button");
var dob = document.querySelector(".dob");
var outputh2 = document.querySelector(".output");

button.addEventListener("click", handler);

//click handler
function handler() {

  if (dob.value !== "") {
    var dobString = dob.value.replaceAll("-", "");

    var reversedDob = "";
    for (var j = dobString.length; j >= 0; j--) {
      reversedDob = reversedDob + dobString.charAt(j);
    }

    console.log(dobString, reversedDob)
    //check if paldindrome
    if (dobString === reversedDob) {
      outputh2.innerText = "Hurrah! Your birthday is palindrome in " + dob.value + " format";
    } else {
      outputh2.innerText = "Opps! Your birthday is not a palindrome";
    }
  } 
  else {
    alert(" Enter your date of birth");
  }

}
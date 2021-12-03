var button = document.querySelector(".check-button");
var dob = document.querySelector(".dob");
var outputh2 = document.querySelector(".output");

button.addEventListener("click", handler);

//click handler
function handler() {
  var reversedDob = "";
  var dobString = dob.value.replaceAll("-", "");

  for (var j = dobString.length; j >= 0; j--) {
    reversedDob = reversedDob + dobString.charAt(j);
  }

  //check if paldindrome
  if (dobString === reversedDob) {
    outputh2.innerText = "Hurrah! Your birthday is palindrome";
    console.log("1");
  }
}

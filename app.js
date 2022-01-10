const button = document.querySelector(".check-button");
const dob = document.querySelector(".dob");
const outputh2 = document.querySelector(".output");

//click handler
let handler = () => {

  if (dob.value !== "") {
    let dobString = dob.value.replaceAll("-", "");

    let reversedDob = "";
    for (let j = dobString.length; j >= 0; j--) {
      reversedDob = reversedDob + dobString.charAt(j);
    }

    console.log(dobString, reversedDob)
    //check if paldindrome
    if (dobString === reversedDob) {
      outputh2.innerText = `Hurrah! Your birthday is palindrome in ${dob.value} format`;
    } else {
      outputh2.innerText = `Opps! Your birthday is not a palindrome`;
    }
  } 
  else {
    alert(" Enter your date of birth");
  }

}

button.addEventListener("click", handler);


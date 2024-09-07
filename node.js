let lowerData = "abcdefghijklmnopqrstuvwxyz";
let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numData = "1234567890";
let symData = "!@#$%^&*()_+";

let passwordInput = document.getElementById("passwordInput");
let passwordLength = document.getElementById("passwordLength");
let sym = document.getElementById("sym");
let num = document.getElementById("num");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");

function generateNumber(data) {
  return data[Math.floor(Math.random()*data.length)];
}
generateNumber(lowerData);

function generate(password="") {
  if (upper.checked) {
    password += generateNumber(upperData)
  }
  if (lower.checked) {
    password += generateNumber(lowerData)
  }
  if (num.checked) {
    password += generateNumber(numData)
  }
  if (sym.checked) {
    password += generateNumber(symData)
  }
  if(password.length<passwordLength.value){
     return generate(password)

  }

  // passwordInput.Value=password;
  console.log(password);


}

function myFun(){
generate()
}


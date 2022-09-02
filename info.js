function validate() {
  var userfname = document.getElementById("fname");
  var uselname = document.getElementById("lname");
  var useremail = document.getElementById("mail");
var usernumber = document.getElementById("number");
var userEmail = document.getElementById("Email");
var userPhone = document.getElementById("Phone");
var userYes = document.getElementById("Yes");
var userNo = document.getElementById("No");


  if (userfname.value =="") 
  {
    alert("First name Can't be empty!");
    return false;
  }
  else if(userlname.value=="")
  {
    alert("Last name can't be empty!"); 
    return false;
  }
  else if(useremail.value=="")
  {
    alert("Email Can't be empty!");
    return false;
  }
else if(usernumber.value=="")
  {
    alert("Number can't be empty!"); 
    return false;
  }
else if(userEmail.value=="")
  {
    alert("Radio button must be selected!"); 
    return false;
  }
else if(userPhone.value=="")
  {
    alert("Radio button must be selected!"); 
    return false;
  }
else if(userYes.value=="")
  {
    alert("Radio button must be selected!"); 
    return false;
  }
else if(userNo.value=="")
  {
    alert("Radio button must be selected!"); 
    return false;
  }
  else {
    return true;

  }
  
}

function numberonly(input) {
  var num = /[^0-9]/gi;
  input.value = input.value.replace(num, "");
}
const body= document.getElementById("body");
const fnameTF= document.getElementById("fnameTF");
const emailTF= document.getElementById("emailTF");
const passwordTF= document.getElementById("passwordTF");
const conpassTF= document.getElementById("conpassTF");
const pnumTF= document.getElementById("pnumTF");


const nameErr= document.getElementById("nameError");
const emailErr= document.getElementById("emailError");
const passErr= document.getElementById("passError");
const conpassErr= document.getElementById("conpassError");
const pnumErr= document.getElementById("pnumError");




const btn1=document.createElement("button");
btn1.id="btn1";
btn1.innerText="Submit";
body.append(btn1);

btn1.addEventListener('click',after_clickedit);

function after_clickedit()
{
   let hasErr=false;
   const nameRegex=/^[a-zA-Z]+$/;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(fnameTF.value.trim()==="")
   {
    hasErr=true;
    nameErr.innerHTML="Please fillup the Name crandential."
    nameErr.style.color="red";
   }
   else{
    if(!nameRegex.test(fnameTF.value))
    {
       hasErr=true;
    nameErr.innerHTML="Name cannot contain number."
    nameErr.style.color="red"; 
    }
   }


   if(emailTF.value.trim()==="")
   {
    hasErr=true;
    emailErr.innerHTML="Please fillup the Email crandential."
    emailErr.style.color="red";
   }
   
    if(!emailRegex.test(emailTF.value))
   {
    hasErr=true;
    emailErr.innerHTML="Please fillup the Email crandential."
    emailErr.style.color="red";
   }



if (passwordTF.value.trim() === "") {
    hasErr = true;
    passErr.innerHTML = "Please enter your password.";
    passErr.style.color = "red";
}


 if (conpassTF.value.trim() === "") {
    hasErr = true;
    conpassErr.innerHTML = "Please confirm your password.";
    conpassErr.style.color = "red";
}




 if (passwordTF.value !== conpassTF.value) {
    hasErr = true;
    conpassErr.innerHTML = "Passwords do not match.";
    conpassErr.style.color = "red";
  }

else if (passwordTF.value.length < 6) {
    hasErr = true;
    passErr.innerHTML = "Password must be at least 6 characters.";
    passErr.style.color = "red";
    }

  

   if(pnumTF.value.trim()==="")
   {
    hasErr=true;
    pnumErr.innerHTML="Please fillup the Phone Number crandential."
    pnumErr.style.color="red";
   }
   if(isNaN(pnumTF.value))
   {
     hasErr=true;
    pnumErr.innerHTML="Please enter your phone number correctly."
    pnumErr.style.color="red";
   }


   if(!hasErr)
   {
   
    alert("Registration Successful!");
    fnameTF.value = "";
    emailTF.value = "";
    passwordTF.value = "";
    conpassTF.value = "";
    pnumTF.value = "";
   }

}
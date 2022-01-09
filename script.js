const form= document.getElementById("form");
const username= document.getElementById("uname");
const password= document.getElementById("password");
const confirmpassword= document.getElementById("confirmpassword");
const email= document.getElementById("email");
form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = confirmpassword.value.trim();

if(usernameValue ===""){
    setError(username ,"Username should not be blank");
}
else
    setSuccess(username);
if(emailValue ===""){
    setError(emailValue ,"Email should not be blank");
}
else
    setSuccess(email);
if(passwordValue ===""){
    setError(passwordValue ,"Password should not be blank");
}
else{
    setSuccess(password);
}
if(password2Value ===""){
    setError(password2Value ,"Password should not be blank");
}
 else if(passwordValue !=  password2Value)
  
     setError(confirmpassword+ " , " +" does not match");

else
    setSuccess(confirmpassword);
}
function setError(input,message){
    const formControl= input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText =message;
}
function setSuccess(){
    const formControl =input.parentElement;
    formControl.className='form-control sucess';

}

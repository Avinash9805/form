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
    if(emailValue ===''){
        setError(email,"Email should not be blank");
        alert("Error")

        console.log("error");
    }
    else
        setSuccess(email);
    
        if(usernameValue ===''){
            alert("Error");
        setError(username, "Username should not be blank");
       
        console.log("error");
    }
    else
        setSuccess(username);
   
    if(passwordValue ===''){
        setError(password ,"Password should not be blank");
        console.log("error");
    }
    else{
        setSuccess(password);
    }
    if(password2Value ===''){
        setError(confirmpassword ,"Password should not be blank");
        console.log("error");
    }
    else if(passwordValue !==  password2Value)
    
        setError(confirmpassword+ " , " +" does not match");

    else
        setSuccess(confirmpassword);
}

function setError(input,message){
    console.log("Init");
    const formControl= input.parentElement;
    console.log(formControl);
    const small = document.querySelector('small');
    console.log(small);
    formControl.className = 'form-control error';
    small.innerText =message;
}
function setSuccess(){
    const formControl =input.parentElement;
    formControl.className='form-control success';

}
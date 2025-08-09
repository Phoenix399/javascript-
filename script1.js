function validate(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message");
let  message = "";
}
if(email===''){
message += "Email is required.";
msgbox.style.color = 'blue';
} else if(pass === ''){
    message = 'Enter a password';
    msgbox.style.color = 'black';
}else if(age === ''){
    message = 'Enter your age';
    msgbox.style.color = 'red';
} else {
    message = "Form submitted successfully!";
    msgbox.style.color = 'green';


}



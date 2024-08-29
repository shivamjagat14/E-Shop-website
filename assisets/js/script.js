let Fname = document.getElementById("Fname");
let Sname=document.getElementById("Sname");
let Email=document.getElementById("Email");
let Password=document.getElementById("Password");
let ConfirmPassword=document.getElementById("confirm_Password")
let continewbtn=document.getElementById("continewbtn");


const formfield={
    firstname:null,
    secondname:null,
    EmailID: null,
    Password: null,
    Password2: null,
}; 

// show Error function  
function showerror(input,massage){
    const formcontrol=input.parentElement;
    let small=formcontrol.lastElementChild;
    small.innerText=massage;
}

// show success function
function showsuccess(input){
}

// check inputrequed 
function checkRequired(inputarr){
    inputarr.forEach(function(input){
        if(input.value===""){
            showerror(input,"Plz Enter value!");
        }
    });
}


// check First Name function
function checkFirstname(input){
    if(input.value===""){
        showerror(input,"plz Enter First Name!");
        formfield.firstname=false;
    }
    else{
        showsuccess(input); 
        formfield.firstname=true;
    }
}


// check second Name function
function checkSecondname(input){
    if(input.value!=""){
        formfield.secondname=true;
        showsuccess(input);
    }
    else{
        formfield.secondname=false;
        showerror(input,"plz Enter Second Name!");
    }
}


// check Email function 
function checkEmail(input){
    let reg=/([a-z])\w*\d\@([a-z])\w*\.([a-z])\w*/;
    if(reg.test(input.value)){
       showsuccess(input);
       formfield.EmailID=true;
    }
    else if (reg.test(input.value)!=input.value) {
        showerror(input,"Plz Enter valid Email!")
        formfield.EmailID=false
    }
    else{
        showerror(input,"Plz Enter Email!");
        formfield.EmailID=false;
    }
}


// match password function 
function matchpassword(password1, password2){
    if(password2.value===""){ 
        formfield.Password2=false
        showerror(password2,"Plz Enter Confirm Password")
    }
    else if(password1.value!=password2.value){
        showerror(password2,"Plz enter valid password!")
        formfield.Password2=false
    }
    else{
        showsuccess(password2);
        formfield.Password2=true 
    }
}


// check password function 
function checkpassword(password, min ,max){
    if(password.value===""){
        showerror(password,"Plz Enter Password!")
        formfield.Password=false;
    }
    else if(password.value.length<=min&&password.value.length<=max){
        showerror(password,"plz enter more than 3 value!");
        formfield.Password=false;
    }
    else if (password.value.length>=min&&password.value.length>=max) {
        showerror(password,"plz enter less than 15 value!");
        formfield.Password=false;
    } 
    else{
        showsuccess(password)
        formfield.Password=true;
    }
}

// continew click button funtion 
continewbtn.addEventListener('click',(event)=>{
    event.preventDefault()
    checkRequired([Fname,Sname,Email,Password,ConfirmPassword]);
        checkFirstname(Fname);
        checkSecondname(Sname);
        checkEmail(Email);
        checkpassword(Password,3,15);
        matchpassword(Password,ConfirmPassword);
        let userdata={
            firstname: Fname.value,
            secondname: Sname.value, 
            EmailID: Email.value,
            Password: Password.value,
            Password2: ConfirmPassword.value,
        };

        let haserror= false;
        Object.values(formfield).map((e)=>{
            if(e===true){
                haserror=true;
            } 
            else{
                haserror=false;
            }
        })
        if(haserror===true){
            location.reload();
        }

        localStorage.setItem("First-Name" , Fname.value);
        localStorage.setItem("Second-Name" , Sname.value);
        localStorage.setItem("Email" , Email.value);
        localStorage.setItem("Password" , Password.value);
        localStorage.setItem("Confirmpassword" , ConfirmPassword.value);
});



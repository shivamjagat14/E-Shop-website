 let emailinput=document.getElementById("floatingInput");
let inputpassword=document.getElementById("floatingPassword");
let continewbtn=document.getElementById("continewbtn");

continewbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let userEmail=localStorage.getItem("Email"); 
    let userpassword=localStorage.getItem("Confirmpassword"); 

    if (emailinput.value == userEmail) {
        if (inputpassword.value == userpassword) {
            console.log("password yess");
            location.replace("index.html");
        }
        else {
            alert("enter valid password!");
        }
    }
    else if (emailinput.value!=userEmail) {
        alert("Enter valid Email !");
    }
    else {
        console.log("No have account ");
    }
})

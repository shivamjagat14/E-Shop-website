// product section countdown 

let daysitem=document.getElementById("days");
let hoursitem=document.getElementById("hr");
let mintusitem=document.getElementById("min");
let secondesitem=document.getElementById("sec");
let special = document.getElementById("special-section");

let countdown = () => {
    let futuredate = new Date("10 Sep 2024");
    let currentdate = new Date();

    let countdate = futuredate - currentdate;

    let days = Math.floor(countdate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(countdate / 1000 / 60 / 60) % 24;
    let mintus = Math.floor(countdate / 1000 / 60) % 60;
    let secondes = Math.floor(countdate / 1000) % 60;
    daysitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    mintusitem.innerHTML = mintus;
    secondesitem.innerHTML = secondes;

    if(futuredate===currentdate){
            special.remove();
        }
}

countdown();
setInterval(countdown,1000);


// navbar scroll
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navbar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    })
})


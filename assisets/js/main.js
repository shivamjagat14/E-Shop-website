// product section countdown 

let daysitem=document.getElementById("days");
let hoursitem=document.getElementById("hr");
let mintusitem=document.getElementById("min");
let secondesitem=document.getElementById("sec");

let countdown = ()=>{
    let futuredate = new Date("1 Sep 2024");
    let currentdate=new Date();

    let countdate=futuredate-currentdate;

    let days= Math.floor(countdate/1000/60/60/24);
    let hours= Math.floor(countdate/1000/60/60)%24;
    let mintus= Math.floor(countdate/1000/60)%60;
    let secondes= Math.floor(countdate/1000)%60;
    daysitem.innerHTML=days;
    hoursitem.innerHTML=hours;
    mintusitem.innerHTML=mintus;
    secondesitem.innerHTML=secondes;
}

countdown();
setInterval(countdown,1000);


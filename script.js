document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const service=document.getElementById("service").value;
const date=document.getElementById("date").value;
const time=document.getElementById("time").value;

const message=
`Hello Small Jozii Cuts!

I'd like to book an appointment.

Name: ${name}

Phone: ${phone}

Service: ${service}

Date: ${date}

Time: ${time}

Payment: Pay on arrival.`;

window.open(

`https://wa.me/27747765685?text=${encodeURIComponent(message)}`,

"_blank"

);

});
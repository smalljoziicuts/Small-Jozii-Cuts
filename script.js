const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const service=document.getElementById("service").value;
const date=document.getElementById("date").value;
const time=document.getElementById("time").value;

const message=`Hello Small Jozii Cuts!

I'd like to book an appointment.

Name: ${name}

Phone: ${phone}

Service: ${service}

Date: ${date}

Time: ${time}

Payment: Pay on arrival.`;

window.open(
`https://wa.me/27747765685?text=${encodeURIComponent(message)}`,
"_blank");

});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.getElementById("close");

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=()=>{

lightbox.style.display="none";

};document
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
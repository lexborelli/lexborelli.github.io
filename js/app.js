
const contactForm = document.querySelector("#contact-main-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message"); 
const subjectInput = document.querySelector("#subject");

const publicKey = "VgQq5a7HAxfmx1TS_";
const serviceID = "service_4aomxmt";
const templateID = "template_8o50j1j";

emailjs.init(publicKey); 

contactForm.addEventListener("submit", e => {

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        subject: subjectInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message was sent successfully."; 
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        subjectInput.value = "";
    }, 
    
    (error) => {
        console.log(error);
        
        submitBtn.innerText = "Something went wrong";
    });
});

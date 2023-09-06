
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
        submitBtn.innerText = "Message was sent successfully!"; 
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        subjectInput.value = "";
    }, 
    
    (error) => {
        console.log(error);
        
        submitBtn.innerText = "oh no, something went wrong";
    });
});

const linkedIn = document.querySelector("#linked-in");
const linkClick = document.querySelector(".linkclick");
const github = document.querySelector("#github");
const githubClick = document.querySelector(".github-click");
const emailIcon = document.querySelector("#email-icon");
const emailClick = document.querySelector(".email-click");
const closeModal = document.querySelector("#close-modal");
const closeModalG = document.querySelector("#close-modal-github");
const closeModalE = document.querySelector("#close-modal-email");

linkedIn.addEventListener("click", e => {
    linkClick.classList.toggle("visible");
});

closeModal.addEventListener("click", e => {
    linkClick.classList.remove("visible");
});

github.addEventListener("click", e => {
    githubClick.classList.toggle("visible");
});

closeModalG.addEventListener("click", e => {
    githubClick.classList.remove("visible");
});

emailIcon.addEventListener("click", e => {
    emailClick.classList.toggle("visible");
});

closeModalE.addEventListener("click", e => {
    emailClick.classList.remove("visible");
});

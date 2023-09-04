function sendMessage(){(
    function(){
        emailjs.init("VgQq5a7HAxfmx1TS_");
    }
)}();

var serviceID ="service_4aomxmt"; 
var templateID = "template_8o50j1j"; 

var params = {
    senderName: document.querySelector("#name").value,
    senderEmail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value
};

emailjs.send(serviceID, templateID, params)
.then( res => { '| Your message has been sent.');
})

.catch(); 
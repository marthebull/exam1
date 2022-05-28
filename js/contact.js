const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const fullName = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const message = document.querySelector ("#message");


const nameMsg = document.querySelector ("#nameMsg");
const subjectMsg = document.querySelector ("#subjectMsg");
const emailMsg = document.querySelector ("#emailMsg");
const messageMsg = document.querySelector ("#messageMsg");
const valMsg = document.querySelector ("#val-message");



function validateForm(e) {
    e.preventDefault(); 

    let submittedName = fullName.value.trim();
    console.log(`Name: ${fullName}`)

    nameMsg.innerHTML = "";
    if (submittedName.length < 5) {
        nameMsg.innerHTML = "Name must be at least 5 characters long!";
    }
    if (/\d/.test(submittedName)) {
        nameMsg.innerHTML = "Name cannot contain any digits!";
    }


    let submittedSubject = subject.value.trim();
    console.log(`Subject: ${subject}`)

    subjectMsg.innerHTML = "";
    if (submittedSubject.length < 15) {
        subjectMsg.innerHTML = "Subject must be at least 15 characters long!";
    }
    


    let submittedEmail = email.value.trim();
    console.log(`Email: ${submittedEmail}`);

    emailMsg.innerHTML = "";

    let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!emailPattern.test(submittedEmail)) {
        emailMsg.innerHTML = "Please enter a valid email!";
    }


    let submittedMessage = message.value.trim();
    console.log(`Message: ${message}`)

    messageMsg.innerHTML = "";
    if (submittedMessage.length < 25) {
        messageMsg.innerHTML = "Message must be at least 25 characters long!";
    }

    
    const displayBanner = (valMsg = "No message", className) => {
        let banner = document.createElement("div");
        banner.classList.add("message");
        if (className) banner.classList.add(className);
        banner.innerHTML = valMsg;
        let firstNode = document.body.childNodes[2];
        document.body.insertBefore(banner, firstNode); 
    }
    

    if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && subjectMsg.innerHTML === "" && messageMsg.innerHTML === "") {
        bannerMsgSubmitt()
    } else {
        bannerMsgFail()
    }

    function bannerMsgSubmitt() {
        valMsg.innerHTML = "Your message has been submitted."
        valMsg.classList.add("ok")
    }
    function bannerMsgFail() {
        valMsg.innerHTML = "Please enter valid information."
        valMsg.classList.add("error")
    }
}


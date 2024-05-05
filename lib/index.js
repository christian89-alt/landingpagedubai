function sendForm(){
    var params = {
        name: document.getElementById('name').value,
        mail: document.getElementById('mail').value,
        subjet: document.getElementById('sujet').value,
        message: document.getElementById('message').value,

    }
}

const serviceID = "service_a8mrncr";
const templateID ="template_t31vltt";


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

function sendForm(){
    var params = {
        name: document.getElementById('name').value,
        mail: document.getElementById('mail').value,
        subjet: document.getElementById('sujet').value,
        message: document.getElementById('message').value,

    }

const serviceID = "service_a8mrncr";
const templateID ="template_t31vltt";


    emailjs.send(serviceID, templateID, params)
.then(res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("sujet").value ="";
    document.getElementById("message").value = "";
    console.log(res);

    alert("Your message sent successfully!!")

})
.catch(err=>console.log(err));
}








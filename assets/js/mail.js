(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "3JJeI2QTCMVKhZtKn",
    });
})();
    
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_we2uskq', 'contact_form', this)
            .then(() => {
                document.getElementById("contact-form").reset();
                alert('SUCCESS!');
                
            }, (error) => {
                alert('FAILED...', error);
            });
    });
}

window.onload = function() {


// If name input is blank ask user to include one
    $('#msgForm').submit(function() {

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

                // Checking for blank fields.
        if (name == '' || email == '' || message == '') {
        alert("Please fill required fields");

        // If message and user has text show 'message sent' alert    
            } else {
                $(".submitted").text( "Message sent! Talk to you soon!");
                return false;

                $("#msgForm")[0].reset(); // To reset form fields on success.
                 // Returns successful data submission message when the entered information is stored in database.
            }  
    });


};

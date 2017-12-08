window.onload = function() {


// If name input is blank ask user to include one
    $('#msgForm').submit(function() {

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

                // Checking for blank fields.
        if (name == '' || email == '' || message == '') {
        alert("Please fill required fields");

        // If message, email, and name has text show 'message sent' alert    
            } else {
                $(".submit").text("Message sent! Talk to you soon!");
                return false;

                $("#msgForm")[0].reset(); // To reset form fields on success.
                 // Returns successful data submission message when the entered information is stored in database.
            }  
    });



        var mn = $(".main-nav");

            $(window).scroll(function() {
                //if the window is scrolled 275px up, then add the class, "main-nav-scrolled" (which makes it stick)
                if($(this).scrollTop() > 275) {
                    mn.addClass("main-nav-scrolled");
                }
                //if we scroll back up 275px, then removed the "main-nav-scrolled" class
                else {
                    mn.removeClass("main-nav-scrolled");
                }
            });




};
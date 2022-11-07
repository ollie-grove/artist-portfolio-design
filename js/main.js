$(document).ready(function() {

    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        e.stopPropagation(); 
    });

    $('html').click(function() {
        $('.nav-dropdown').hide(); 
    })

    $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
    })
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });
});

function validateForm() {
    const name = document.forms["contactForm"]["name"]; 
    const pronouns = document.forms["contactForm"]["pronouns"];
    const email = document.forms["contactForm"]["email"]; 
    const project = document.forms["contactForm"]["project"]; 

    if (name.value == "") {
        document.querySelector('errorname').innerHTML="Please enter your name";
        name.focus();
        return false;
    } else {
        document.querySelector('errorname').innerHTML=""; 
    }

    if (pronouns.value == "") {
        document.querySelector('errorpronouns').innerHTML="Please specify your pronouns. Example) She/Her, They/Them"; 
        pronouns.focus();
        return false; 
    } else {
        document.querySelector('errorpronouns').innerHTML=""; 
    }

    if (email.value == "") {
        document.querySelector('erroremail').innerHTML="Please enter a valid email address";
        email.focus();
        return false;
    } else {
        document.querySelector('erroremail').innerHTML=""; 
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.querySelector('erroremail').innerHTML="Please enter a valid email address";
        email.focus(); 
        return false; 
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.querySelector('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }

    if (project.value == "") {
        document.querySelector('errormsg').innerHTML="Please enter a valid message"; 
        project.focus();
        return false; 
    } else {
        document.querySelector('errormsg').innerHTML="";
    }
    return true;
    
}
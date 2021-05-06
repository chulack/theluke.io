"use strict";

/*********************************************************************
***
*Original Author: Luke Chulack                         
*Date Created: 02/26/2021                                     
*Version: 1.0                                           
*Date Last Modified: 02/26/2021                               
*Modified by: Luke Chulack        
*Modification log:  
    version 1.0 - 02/26/2021  - added the needed code for fullpage and built the hamburger menu following the outline hamburger menu of w3school. setup basic verification for form. 
    version 2.0 - 05/05/2021  - added code to allow menu on all pages, made menu ui better by making all page elements go to none while menu is open.

    ***
******************************************************************** */


const $ = (e) => document.querySelector(e);


document.addEventListener("DOMContentLoaded", () => {

    console.log("I am useing fullPgae.JS under the GPL 3 Licence, the full source code will be under GPL 3 here: https://github.com/chulack/theluke.io")


    // fullpage code
    new fullpage("#fullPage", {
        autoScrolling:true,
        navigation: true,
        css3: true,

        anchors: ['home', 'about', 'work'],
        navigationTooltips: ["Home", "About", "My Work"],
        showActiveTooltip: true,
        slidesNavigation: true,


    })




     //  fp-nav top 
     window.setInterval(()=> {  
        if($("body").classList != "fp-viewing-home") {

            $("#fp-nav").classList.add("top-fp-nav");
            $("#fp-nav ul").classList.add("turn-fp-nav");

        } else {
            $("#fp-nav").classList.remove("top-fp-nav");
            $("#fp-nav ul").classList.remove("turn-fp-nav");

        }

}, 10);

     

    // menu for other pages 
   
    $("#menu").addEventListener("click", ()=>{

            $("#myNav").style.width = "100%";
            $("#all_class_1").classList.toggle("remove");
            $("#all_class_2").classList.toggle("remove");
            $("#all_class_3").classList.toggle("remove");

            $("#fp-nav").classList.toggle("remove");

    });

   

    $("#menu_about").addEventListener("click", ()=>{

        $("#myNav").style.width = "100%";
        $("#all_class_1").classList.toggle("remove");
        $("#all_class_2").classList.toggle("remove");
        $("#all_class_3").classList.toggle("remove");

        $("#fp-nav").classList.toggle("remove");
    });

$("#menu_work").addEventListener("click", ()=>{

    $("#myNav").style.width = "100%";
    $("#all_class_1").classList.toggle("remove");
    $("#all_class_2").classList.toggle("remove");
    $("#all_class_3").classList.toggle("remove");

    $("#fp-nav").classList.toggle("remove");

});
$(".closebtn").addEventListener("click", ()=>{

    $("#myNav").style.width = "0%";
    $("#all_class_1").classList.toggle("remove");
    $("#all_class_2").classList.toggle("remove");
    $("#all_class_3").classList.toggle("remove");

    $("#fp-nav").classList.toggle("remove");
});



  

    // hamburger menu for about 



    // contact page



    $("#contact_1").addEventListener("click", ()=>{

            $("#contact_menu").style.width = "100%";
            $("#all_class_1").classList.toggle("remove");
            $("#all_class_2").classList.toggle("remove");
            $("#all_class_3").classList.toggle("remove");

            $("#fp-nav").classList.toggle("remove");

    });

    $("#contact_2").addEventListener("click", ()=>{
        $("#myNav").style.width = "0%";
        $("#contact_menu").style.width = "100%";


    });



    $(".closebtn_contact").addEventListener("click", ()=>{

        $("#contact_menu").style.width = "0%";
        $("#all_class_1").classList.toggle("remove");
        $("#all_class_2").classList.toggle("remove");
        $("#all_class_3").classList.toggle("remove");

        $("#fp-nav").classList.toggle("remove");
    });



    // form verification
    $("#send_form").addEventListener("click", ()=>{

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

        let error = 0;



        if($("#name").value.trim() ==  "") {
            error += 1;
        }

    
    if($("#email").value.trim() ==  ""  || !emailPattern.test(email.value.trim()) )
    {
        error += 1;
    }

    if($("#msg").value.trim() ==  "")
    {
        error += 1;
    }

    if(error == 0) {
        alert("Form submited")
        $("#form_main").submit();
    }

});



});


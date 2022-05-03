"use strict";

/*********************************************************************
***
*Original Author: Luke Chulack                         
*Date Created: 02/26/2021                                     
*Version: 3.0                                           
*Date Last Modified: 05/03/2022                              
*Modified by: Luke Chulack        
*Modification log:  
    version 1.0 - 02/26/2021  - added the needed code for fullpage and built the hamburger menu following the outline hamburger menu of w3school. setup basic verification for form. 
    version 2.0 - 05/05/2021  - added code to allow menu on all pages, made menu ui better by making all page elements go to none while menu is open.
    version 3.0 - 05/03/2022  - removed code for contact form that was just repeating, added link redirect using javascript, add logic for loader on start up, and added fixed menu so when item is click the menu leaves.

    ***
******************************************************************** */


const $ = (e) => document.querySelector(e);
const redirect = (e) => location.href = e;


document.addEventListener("DOMContentLoaded", () => {

    
 const main = () => {


   $("#all").classList.toggle("hide");
   $("#spinner").classList.toggle("hide");

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


// close menu when page is clicked
$("#homeBTN").addEventListener("click", ()=>{

    $("#myNav").style.width = "0%";
    $("#all_class_1").classList.toggle("remove");
    $("#all_class_2").classList.toggle("remove");
    $("#all_class_3").classList.toggle("remove");

    $("#fp-nav").classList.toggle("remove");
});
  

$("#aboutBTN").addEventListener("click", ()=>{

    $("#myNav").style.width = "0%";
    $("#all_class_1").classList.toggle("remove");
    $("#all_class_2").classList.toggle("remove");
    $("#all_class_3").classList.toggle("remove");

    $("#fp-nav").classList.toggle("remove");
});
  



// links for github


$("#snelfu_webpage").addEventListener("click",  () =>{
    redirect("https://chulack.github.io/snelfu_webpage/index.html");

});
$("#boise_noodle_final").addEventListener("click",  () =>{
    redirect("https://chulack.github.io/boise_noodle_final/index.html");

});
$("#new_offer").addEventListener("click",  () =>{
    redirect("https://chulack.github.io/new_offer/index.html");

});

$("#boiserock").addEventListener("click",  () =>{
    redirect("http://boiserock.com");

});
$("#pop_magic_final").addEventListener("click",  () =>{
    redirect("https://chulack.github.io/pop_magic_final/index.html");

});
$("#space_invaders").addEventListener("click",  () =>{
    redirect("https://chulack.github.io/space_invaders/index.html");

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


 }

 setTimeout(main, 1000);


});


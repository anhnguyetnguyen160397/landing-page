/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

let section1=document.getElementById('section1');
let section2=document.getElementById('section2');
let section3=document.getElementById('section3');



navbar_section1=document.getElementById('navbar_section1');
navbar_section1.addEventListener('click',function scrollFunction(){
    section2.style.backgroundColor='';
    section3.style.backgroundColor='';
    section1.scrollIntoView({
        behavior: "smooth"
    });

    section1.style.backgroundColor='rgb(2, 44, 69, 0.2)';
});

navbar_section2=document.getElementById('navbar_section2')
navbar_section2.addEventListener('click',function(){
    section1.style.backgroundColor='';
    section3.style.backgroundColor='';
    section2.scrollIntoView({
        behavior: "smooth"}) ;
    section2.style.backgroundColor='rgb(2, 44, 69, 0.2)';
    
})

navbar_section3=document.getElementById('navbar_section3');
navbar_section3.addEventListener('click',function(){
    section1.style.backgroundColor='';
    section2.style.backgroundColor='';
    section3.scrollIntoView({
        behavior: "smooth"});
        section3.style.backgroundColor='rgb(2, 44, 69, 0.2)';
})


home=document.getElementById('home');
home.addEventListener('click',function(){
    section1.style.backgroundColor='';
    section2.style.backgroundColor='';
    section3.style.backgroundColor='';
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


var btns = document.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


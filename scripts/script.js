var gil = [0, 0, 0, 0, 0, 0, "Locked", "Locked", "Locked"];


$(document).ready(function() {
    
  //Start Screen  
  $("#openGame-btn").click(function() {
      $("#start-screen").hide('fast');
      $("#home-screen").show('medium');
  })
  
  //Home Screen
  $("#newGame-btn").click(function() {
      $("#home-screen").hide('fast');
      $("#introduction").show('medium');
      $("#introduction").addClass('active');
      $("header").removeClass('push-down-75');
      $("#return-btn").show('medium');
  })
  
  
  //Introduction
  $("#introStart-btn").click(function() {
      $("#introduction").hide('fast');
      $("#introduction").removeClass('active');
      $("#content").show('medium');
      $("#p1").addClass('active');
      $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  })
  
  // Home Btn - Nav
  $(".navHome-btn").click(function() {
      $(".active").hide('fast');
      $(".ig-navbar").hide('fast');
      $("#home-screen").show('medium');
  })
  
  
  //Return Btn
  $("#return-btn").click(function() {
    $("#home-screen").hide('fast');
    $(".active").show('medium')
    $(".ig-navbar").show('medium');
  })
  
    
   
    $(".c-btn-1").click(function() {
      $(".c-1").show('medium');
      $(".c-1").addClass('active');
  })
  
  $(".c-btn-2").click(function() {
      $(".c-2").show('medium');
      $(".c-2").addClass('active');
  })
  
  $(".c-btn-3").click(function() {
      $(".c-3").show('medium');
      $(".c-3").addClass('active');
  })
  
  $(".c-btn-4").click(function() {
      $(".c-4 ").show('medium');
      $(".c-4").addClass('active');
  })
  
  
  $(".c-btn").click(function() {
      $(this).parent().hide('slow');
  })
  
})



// --------------------------- Modal
// Get Modal Element
var modal = document.getElementById("stats-modal");

// Get open modal button
var modalBtn = document.getElementById("modal-btn");

// Get close btn
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Listen for Open modal
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside Click
window.addEventListener('click', clickOutside)


//Function to open modal
function openModal() {
    modal.style.display = "block"
}

//Function to close modal
function closeModal() {
    modal.style.display = "none"
}

function clickOutside(e) {
    if(e.target == modal) {
    modal.style.display = "none"
    }
}


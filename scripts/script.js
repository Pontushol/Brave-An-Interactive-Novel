var gil = [0, 0, 0, 0, 0, 0, "Locked", "Locked", "Locked"];


document.getElementById("str-btn").addEventListener("click", addStr);
function addStr() {
  gil[0] = gil[0]+1
}

document.getElementById("agi-btn").addEventListener("click", addAgi);
function addAgi() {
  gil[1] = gil[1]+1
};


document.getElementById("dex-btn").addEventListener("click", addDex);
function addDex() {
  gil[2] = gil[2]+1
}

document.getElementById("int-btn").addEventListener("click", addInt);
function addInt() {
  gil[3] = gil[3]+1
}

document.getElementById("prc-btn").addEventListener("click", addPrc);
function addPrc() {
  gil[4] = gil[4]+1
}

document.getElementById("wit-btn").addEventListener("click", addWit);
function addWit() {
  gil[5] = gil[5]+1
}


$(document).ready(function() {
    
   
    $(".btn-1").click(function() {
      $(".choice-1").show('medium');
  })
  
  $(".btn-2").click(function() {
      $(".choice-2").show('medium');
  })
  
  $(".btn-3").click(function() {
      $(".choice-2").show('medium');
  })
  
  $(".btn-4").click(function() {
      $(".choice-2 ").show('medium');
  })
  
  $(".choice-btn").click(function() {
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


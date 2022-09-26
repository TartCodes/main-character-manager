
//weapon info
// const melee = document.getElementById('addMelee')
// const meleeDiv = document.getElementById('melee-weapon')
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button




// Adding/Removing Weapons

const meleeModal = document.getElementById('melee-modal')
const addMeleeBtn = document.getElementById('addMelee')
const closeMeleeBtn = document.getElementById('close-melee')

addMeleeBtn.addEventListener('click', openMelee)
closeMeleeBtn.addEventListener('click', closeMelee)
window.addEventListener('click', outsideClick);

//opens the melee modal window
function openMelee(){
    console.log(123)
    meleeModal.style.display = 'flex'
}

//closes the melee modal window
function closeMelee(){
    console.log(123)
    meleeModal.style.display = 'none'
}

//close the modal(s) clicking outside window
function outsideClick(e) {
    if (e.target == meleeModal) {
      meleeModal.style.display = 'none';
    }
  }



  




//button for showing and hiding shield information
shieldButton.onclick = function() {    
    if(showHideShield.style.display === 'flex'){ 
        showHideShield.style.display = 'none'
    }else{
        showHideShield.style.display = 'flex'
    }    
} 

//swaps the text on shield button
shieldButton.addEventListener('click', function shieldButtonTextSwap() {
    if(shieldButton.innerText === 'Show Shield'){
        shieldButton.innerText = 'Hide Shield'
    } else{
        shieldButton.innerHTML = 'Show Shield'
    }
})




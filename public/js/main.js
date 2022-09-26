
//weapon info
// const melee = document.getElementById('addMelee')
// const meleeDiv = document.getElementById('melee-weapon')
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button




// Adding/Removing Weapons

//the modal window
const meleeModal = document.getElementById('melee-modal')
//button to open the modal window
const addMeleeBtn = document.getElementById('addMelee')
//close the modal
const closeMeleeBtn = document.getElementById('close-melee')
//add the weapon to the dom
const appendWeapon = document.getElementById('add-weapon')
//access melee content
const meleeContent = document.getElementById('melee-content')
//div to append to?
const appended = document.getElementById('weapon-buttons')

addMeleeBtn.addEventListener('click', openMelee);
closeMeleeBtn.addEventListener('click', closeMelee);
appendWeapon.addEventListener('click', createWeapon)
window.addEventListener('click', outsideClick);

//opens the melee modal window
function openMelee(){    
    meleeModal.style.display = 'flex'
}

//closes the melee modal window
function closeMelee(){    
    meleeModal.style.display = 'none'
}

//close the modal(s) clicking outside window
function outsideClick(e) {
    if (e.target == meleeModal) {
      meleeModal.style.display = 'none';
    }
  }

function createWeapon(){
   console.log('nope')
}



// melee.addEventListener('click', function addMelee() {
//     let newDiv = document.createElement('div')
//         newDiv.className = 'melee-weapon-div'
//         newDiv.innerHTML = "Weapon Name"
//         meleeDiv.appendChild(newDiv)

//     let nameInput = document.createElement('input')
//         newDiv.appendChild(nameInput)

//     let attackDiv = document.createElement('div')
//         attackDiv.className = 'damage-die'
//         attackDiv.innerHTML = 'Attack'       
//         newDiv.appendChild(attackDiv)
    
//     let attackInput = document.createElement('input')
//         attackInput.className = 'number-input'
//         attackInput.type = 'number'
//         newDiv.appendChild(attackInput)
    
//     let dSpan = document.createElement('span')
//         dSpan.innerHTML = 'd'
//         newDiv.appendChild(dSpan)
// })


  




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




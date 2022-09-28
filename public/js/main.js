
//weapon info
// const melee = document.getElementById('addMelee')
// const meleeDiv = document.getElementById('melee-weapon')
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button




// Adding/Removing Weapons

//the modal window
    // const meleeModal = document.getElementById('melee-modal')
//button to open the modal window
    // const showWeapon = document.getElementById('addMelee')
//close the modal
    // const closeMeleeBtn = document.getElementById('close-melee')
//add the weapon to the dom
// const showWeapon = document.getElementById('add-weapon')
//access melee content
    // const meleeContent = document.getElementById('melee-content')
//div to append to?
    // const appended = document.getElementById('weapon-buttons')

// addMeleeBtn.addEventListener('click', openMelee);
    // closeMeleeBtn.addEventListener('click', closeMelee);
// showWeapon.addEventListener('click', createWeapon)
    // window.addEventListener('click', outsideClick);

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


//opens the melee modal window
// function openMelee(){    
//     meleeModal.style.display = 'flex'
// }

//closes the melee modal window
// function closeMelee(){    
//     meleeModal.style.display = 'none'
// }

//close the modal(s) clicking outside window
// function outsideClick(e) {
//     if (e.target == meleeModal) {
//       meleeModal.style.display = 'none';
//     }
//   }

// function createWeapon() {
//     const temp = document.getElementsByTagName("template")[0];
//     const clon = temp.content.cloneNode(true);
//     document.body.appendChild(clon);
// }




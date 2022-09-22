
//button for weapon
const addWeaponBtn = document.getElementById('weapon-button')
//show shield info button
const shieldButton = document.getElementById('shield-button')
let showHideShield = document.getElementById('shield-info')
//text swap for shield button




// Adding/Removing Weapons

    // I want to click the add weapon button to appened the already created
        // div(s) the the li? 

addWeaponBtn.onclick = function () {
    let weaponContainer = document.querySelector('#weapon-container')
    let meleeWeapon = document.querySelector('#melee-weapon')
    weaponContainer.appendChild(meleeWeapon)
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




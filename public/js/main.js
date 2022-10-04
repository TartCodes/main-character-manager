
//show shield info button
const shieldButton = document.getElementById('shield-button')
//text swap for shield button
const showHideShield = document.getElementById('shield-info')
//keeping hidden open on refresh
// const shieldInfo = localStorage.getItem()


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






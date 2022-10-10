
//show shield info button
const shieldButton = document.getElementById('shield-button')
//text swap for shield button
const showHideShield = document.getElementById('shield-info')
//level buttons
// const levelButtons = document.getElementsByClassName('level-button')
const levelTextArea = document.querySelectorAll('[id^=levelText]')



//button for levels
for(let showText of document.getElementsByClassName('level-button')){
    showText.onclick = function(){     
        for(let i = 0; i < levelTextArea.length; i++){
            if(levelTextArea[i].style.display === 'none'){
                levelTextArea[i].style.display = 'initial'
            } else {
                levelTextArea[i].style.display = 'initial'
            }
        }
        

        // if(levelTextArea.style.display === 'none'){
        //     levelTextArea.style.display = 'none'
        // } else {
        //     levelTextArea.style.display = 'initial'
        //     }
        // }
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






//level buttons
// const levelButtons = document.getElementsByClassName('level-button')
// const levelTextArea = document.querySelectorAll("[id^=levelText]");

// //button for levels
// for (let showText of document.getElementsByClassName("level-button")) {
//   showText.onclick = function () {
//     for (let i = 0; i < levelTextArea.length; i++) {
//       if (levelTextArea[i].style.display === "none") {
//         levelTextArea[i].style.display = "initial";
//       } else {
//         levelTextArea[i].style.display = "initial";
//       }
//     }

// if(levelTextArea.style.display === 'none'){
//     levelTextArea.style.display = 'none'
// } else {
//     levelTextArea.style.display = 'initial'
//     }
// }
//   };
// }

class DisplayInfo {
  //shield button text
  shieldButtonText = document.getElementById("shield-button");
  //shield info display
  showHideShield = document.getElementById("shield-info");
  //level button
  levelButton = document.getElementsByClassName("level-button"); //<-- fix
  levelsTextarea = document.getElementsByClassName("level-text");

  displayShieldInfo() {
    this.shieldButtonText.onclick = () => {
      if (this.showHideShield.style.display === "flex") {
        this.showHideShield.style.display = "none";
      } else {
        this.showHideShield.style.display = "flex";
      }
      if (this.shieldButtonText.innerText === "Show Shield") {
        this.shieldButtonText.innerText = "Hide Shield";
      } else {
        this.shieldButtonText.innerText = "Show Shield";
      }
      console.log(this.levelButton[0]);
    };
  }

  levelDisplay() {
    for (let levels of this.levelButton) {
      levels.onclick = () => {
        for (let i = 0; i < this.levelsTextarea.length; i++) {
          console.log(this.levelsTextarea.closest("button"));
        }
      };
    }
  }
}

let showInputs = new DisplayInfo();
showInputs.displayShieldInfo();
showInputs.levelDisplay();

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
  //   levelButton = document.querySelectorAll('[id^="lvl"]'); //<-- fix
  //   levelsTextarea = document.querySelectorAll('[id^="level"]');

  //NEED TO MAKE THIS SMALLER - REFACTOR
  //lvl one
  levelOneBtn = document.getElementById("one-button");
  levelOneTa = document.getElementById("levelText1");
  //lvl two
  levelTwoBtn = document.getElementById("two-button");
  levelTwoTa = document.getElementById("levelText2");
  //level three
  levelThreeBtn = document.getElementById("three-button");
  levelThreeTa = document.getElementById("levelText3");

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

  //figure out how to loop through and only display 1
  levelDisplay() {
    this.levelOneBtn.addEventListener("click", (e) => {
      this.levelOneTa.style.display === ""
        ? (this.levelOneTa.style.display = "initial")
        : (this.levelOneTa.style.display = "");
    });
    this.levelTwoBtn.addEventListener("click", (e) => {
      this.levelTwoTa.style.display === ""
        ? (this.levelTwoTa.style.display = "initial")
        : (this.levelTwoTa.style.display = "");
    });
    this.levelThreeBtn.addEventListener("click", (e) => {
      this.levelThreeTa.style.display === ""
        ? (this.levelThreeTa.style.display = "initial")
        : (this.levelThreeTa.style.display = "");
    });
  }
}

// .onclick = () => {
//     for (let i = 0; i < this.levelsTextarea.length; i++) {
//       console.log(this.levelsTextarea.levelTwo);
//     }
//   };

let showInputs = new DisplayInfo();
showInputs.displayShieldInfo();
showInputs.levelDisplay();

class DisplayInfo {
  //shield button text
  shieldButtonText = document.getElementById("shield-button");
  //shield info display
  showHideShield = document.getElementById("shield-info");
  //get textareas
  levelsTextarea = document.getElementsByClassName("level-text");
  //get parent node which is the button
  levelsButton = document.getElementsByClassName("level-button");
  //get submit button
  submitButton = document.getElementById("submit-button");

  handleClick() {
    for (let i = 0; i < this.levelsButton.length; i++) {
      this.levelsButton[i].addEventListener("click", () => {
        this.levelsTextarea[i].style.display === ""
          ? (this.levelsTextarea[i].style.display = "initial")
          : (this.levelsTextarea[i].style.display = "");
      });
    }
  }

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
    };
  }
}

let showInputs = new DisplayInfo();
showInputs.displayShieldInfo();
showInputs.handleClick();

// MODAL
//wrapper
let modal = document.getElementById("modal");
//modal button
let modalBtn = document.getElementById("modal-btn");

modalBtn.onclick = () => {
  modal.style.display = "flex";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

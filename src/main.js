//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');
const layerA =  document.getElementById('step-a');

const myBoxesLayerB = document.getElementsByClassName('blockb'); //I think there's an issue pulling here
const layerB =  document.getElementById('step-b');


// our function - local scope
function loopThrough() {
  const changeColor = () => {
    this.classList.toggle('lime');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


//loop through for number string************************
function loopThroughNumber() {
  const changeColorTwo = () => this.classList.toggle('forest')

  for (let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorTwo, i * 1000);
  }
}
loopThroughNumber();

//function for layer two reveal
function changeLayer () {
  const swap = () => {
    layerA.classList.add('hide');
    layerB.classList.remove('hide');
  }
 setTimeout(swap, this.textContent.length * 2 * 1000);
};


// event listener for box change
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
};

// event listener for number string
for (let i = 0; i < myBoxes.length; i++) {
  myBoxesLayerB[i].addEventListener('click', loopThroughNumber);
};

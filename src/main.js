//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');
const layerA =  document.getElementById('step-a');

const myBoxesLayerB = document.getElementsByClassName('blockb'); //I think there's an issue pulling here
const layerB =  document.getElementById('step-b');
const myNumber = myBoxesLayerB.innerHTML;


// our function - local scope
function loopThrough() {

  const changeColor = () => {
    this.classList.toggle('lime');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


//loop through for number string***********this is where one of the issues is*****************
function loopThroughNumber() {
  const changeColorTwo = () => myBoxesLayerB.classList.toggle('lime')

  for (let i = 0; i < Number(myNumber) * 2; i++) {
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

//function for number string***************************************
//function changeLayerNumber () {
//  const swap = () => {
//    layerA.classList.add('hide');
//    layerB.classList.remove('hide');
//  }
// setTimeout(swap, this.textContent.length * 2 * 1000);
//};


// event listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
};

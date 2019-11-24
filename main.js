//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');
const layerA =  document.getElementById('step-a');

const myBoxesLayerB  = document.getElementsByClassName('block-b');
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


//loop through for number string
//function loopThroughTwo() {

//  const changeColor = () => {
//    this.classList.toggle('lime');
//  };
//  for ( let i = 0; i < this.textContent.length * 2; i++) {
//    setTimeout(changeColor, i * 1000);
//  }
// };

function changeLayer () {
  const swap = () => {
    layerA.classList.add('hide');
    layerB.classList.remove('hide');
  }

 setTimeout(swap, this.textContent.length * 2 * 1000);

};

//function for number string
//function changeLayerTwo () {
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

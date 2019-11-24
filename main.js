//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');
const myBoxesLayerB = document.getElementsByClassName('block-b');

// our function - local scope
function loopThrough() {

  const changeColor = () => {
    this.classList.toggle('lime');
  };

  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }


};


// event listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};

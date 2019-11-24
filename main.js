//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');

// our function - local scope
function loopThrough() {

  const changeColor = () => this.classList.toggle('beige');

  for(let i = 0; i < this.textContent.length; i++) {
    changeColor();
  };


};


// event listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};

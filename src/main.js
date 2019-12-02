//make something flash the the number of times that the name of the color is long
//global variables
const myBoxes = document.getElementsByClassName('block');
const layerA = document.getElementById('step-a');

const myBoxesLayerB = document.getElementsByClassName('blockb');
const layerB = document.getElementById('step-b');

const myBoxesLayerC = document.getElementsByClassName('blockc');
const layerC = document.getElementById('step-c');

//fortunes start here
const irishFortunes = ['A drink precedes a story', 'Youth does not mind where it sets its foot', 'You’ve got to do your own growing, no matter how tall your father was', 'The well-fed does not understand the lean', 'A good laugh is the  best cure', 'Do not take the thatch from your own roof to buy slates for another man’s house', 'There’s no use boiling your cabbage twice', 'A tune is more lasting than the song of the birds & a word more lasting than the wealth of the world', 'It’s as easy to catch a cold in a King’s castle as in a sheppard’s hut', 'Lose an hour in the morning and you’ll be looking for it all day'];
const fortuneResults = document.getElementById('fortune-results');

// LAYER 1
// our function - local scope - loop through word
function loopThrough() {
  const changeColor = () => {
    this.classList.toggle('lime');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//function for layer TWO reveal***********
function changeLayer () {
  const swap = () => {
    layerA.classList.add('hide');
    layerB.classList.remove('hide');
  }
 setTimeout(swap, this.textContent.length * 2 * 1000);
};

for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
};

// LAYER Two
//loop through for number string************************
function loopThroughNumber() {
  const changeColorTwo = () => this.classList.toggle('forest')

  for (let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorTwo, i * 1000);
  }
}

//function for layer THREE reveal***********
function changeLayerTwo() {
  const swap = () => {
    layerB.classList.add('hide');
    layerC.classList.remove('hide2');
  }
 setTimeout(swap,  Number(this.textContent) * 2 * 1000);
};

// event listener for number string
for (let i = 0; i < myBoxes.length; i++) {
  myBoxesLayerB[i].addEventListener('click', loopThroughNumber);
  myBoxesLayerB[i].addEventListener('click', changeLayerTwo);
};

// LAYER THREE
//for second number transition
//function for layer THREE reveal***********
function changeLayerThree() {
  const swap = () => {
    layerC.classList.add('hide');
    fortuneResults.classList.remove('hide2');
    irishFortunes.sort((a, b) => {return 0.5 - Math.random()});
    const fortuneTextNode = document.createTextNode(irishFortunes[0]);
    const fortuneParagraph = document.createElement('p');
    fortuneParagraph.appendChild(fortuneTextNode);
    fortuneResults.appendChild(fortuneParagraph);
  }
  setTimeout(swap,  Number(this.textContent) * 2 * 1000);
};

for (let i = 0; i < myBoxes.length; i++) {
  myBoxesLayerC[i].addEventListener('click', loopThroughNumber);
  myBoxesLayerC[i].addEventListener('click', changeLayerThree);
};

# project related to Dom

## project links

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# solution code

## project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body"
)
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;

    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
      
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
      
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
      
    }
  })
})
```

## project 2
```javascript

const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height=='' || height<0 || isNaN(height)){
    results.innerHTML=`please give the valid height ${height}`;
  }else if(weight=='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give the valid weight ${weight}`;
  } else{
     const bml = (weight/((height*height)/1000)).toFixed(2);
     if(bml<=18.6)
     results.innerHTML = `<span>under weight ${bml}</span>`;
     if(bml>18.6 && bml<=24.9)
     results.innerHTML = `<span>Normal weight ${bml}</span>`;
     if(bml>24.9)
     results.innerHTML = `<span>overweight ${bml}</span>`;
  }
 


})

```

## project 3 
```javascript

const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## project 4 
```javascript
let randomeNUmber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess=1

let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
     validateGuess(guess);
  })
}



function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number');
  }
 else if(guess<1){
    alert('please enter a number greater than 1');
  }
 else if(guess>100){
    alert('please enter a number less than 100');
  }else{
    prevGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMassage(`game over : random number was ${randomeNUmber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess){
  if(guess===randomeNUmber){
    displayMassage(`you guessed it right`);
    endGame();
  }else if(guess < randomeNUmber){
    displayMassage(`you guess too low`);
  }else if(guess>randomeNUmber){
    displayMassage(`you guess to high`);
  }
}

function displayGuess(guess){
  userInput.value ='';
  guessSlot.innerHTML+=`${guess},  `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`

}

function displayMassage(message){
     lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">start new game</h2>`;
    startOver.appendChild(p);
    playgame=false;
    newGame();
}

function newGame(){

  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click',function(e){
    randomeNUmber = parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)



    playgame=true;

  })

}



```
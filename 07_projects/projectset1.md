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
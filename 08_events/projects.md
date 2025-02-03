## project 5
```javascript
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
const startchangingcolor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgcolor, 1000);
  }

  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopchangingcolor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);

```

## project 6

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=
    `<div class="color">
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key===' '? 'space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>
    
    </div>`
})
```
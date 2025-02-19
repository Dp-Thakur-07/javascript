let inputs = document.getElementById('inp')
let text = document.querySelector('.text')

function add(){
    if(inputs.value == ""){
        alert("please enter task")
    }else{
        let newELe = document.createElement("ul")
        newELe.innerHTML = `${inputs.value} <i class="material-icons">&#xe872;</i>`
        text.appendChild(newELe)
        inputs.value = ""
        newELe.querySelector("i").addEventListener('click',remove)
        function remove(){
            newELe.remove()
        }
    }
}
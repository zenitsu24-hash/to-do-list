const input = document.getElementById("input");
let list = document.getElementById("list");

function addtask(){
    if(input.value == ""){
        alert("Please add some task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    input.value = "";
    permanent();
}

document.getElementById('list').addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        permanent();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        permanent();
    }
}, false)

function permanent(){
    localStorage.setItem('data', list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem('data');
}
showtask();
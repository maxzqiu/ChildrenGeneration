// .createElement()
// .appendChild
// .removeChild(element)

/* const sandbox=document.querySelector("#sandbox")
console.log(sandbox)
console.log(sandbox.childNodes)
console.log(sandbox.parentNode)
for (i=0; i<10;i+=1){
    const P = document.createElement("p") // create paragraph
    P.textContent="Hello I am a paragraph generated in JS"
    console.log(P)
    sandbox.appendChild(P)
} */

// To Do List
// Input to type a todo member in
// button to add item to to-do list
// list of items show up on website
// add a small [x] button on each item
// click the x and the item will be deleted

const todolist = document.querySelector("#todolist")
const Input=document.querySelector("#input")
const Run = document.querySelector("#additem")

function addTodo(){
    let todoitem = document.createElement("div");
    let close=document.createElement("button");
    close.classList.add("right")
    let sthrough=document.createElement("button");
    sthrough.classList.add("left")
    let text=document.createElement("p");
    close.textContent="x";
    sthrough.textContent="Done"
    close.onclick = function(){
        // close.parentElement.classList.add("delete");
        todolist.removeChild(todoitem)
    }
    sthrough.onclick=function(){
        if (todoitem.classList.contains("check")){
            todoitem.classList.remove("check")
        } else{
            todoitem.classList.add("check");
            // todolist.removeChild(todoitem);
            todolist.appendChild(todoitem);
        }
        
    }
    text.textContent = Input.value;
    todoitem.appendChild(sthrough)
    todoitem.appendChild(close);
    todoitem.appendChild(text);
    todolist.appendChild(todoitem);
    
}

Run.onclick = addTodo;

/*function drawTodo(){
    todolist.innerHTML = ""
    for (i=0; i<todo.length; i+=1){
        let todoitem = document.createElement("div");
        let close=document.createElement("button");
        let text=document.createElement("p");
        close.textContent="x";
        close.onclick = function(){
            close.parentElement.classList.add("delete");
        }
        text.textContent=(todo[i]);
        todoitem.appendChild(close);
        todoitem.appendChild(text);
        todolist.appendChild(todoitem);
    
    }
} */






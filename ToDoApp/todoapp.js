var userText = document.getElementById("userText"),
clicky = document.getElementById("clicky"),
itemArray = [],
toDoItems = document.getElementById("toDoItems");


clicky.onclick = addItem;
userText.oninput = checkInputValue;

//create new list item, add text to list item, add list item to unordered list 

function addItem(){
  itemArray.push(userText.value);
  var newEl = document.createElement("li");
  newEl.innerText = userText.value;
  newEl.onclick = clickItem
  toDoItems.appendChild(newEl);
  userText.value="";
  console.log(itemArray)
}


function clickItem(){
//  alert(this.innerText);
  this.classList.add("done");
  var index = itemArray.indexOf(this.innerText);
  itemArray.splice(index,1);
  console.log(itemArray)
}



function checkInputValue(){
  var text = this.value;
  if (text.length>0){
    clicky.disabled = false;
  }
  else{
    clicky.disabled = true;
  }
}



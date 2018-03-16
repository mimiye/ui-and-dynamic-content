
//Save the reference to text-field into a variable. | <input type="text">
let input = document.querySelector("#input");

//Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.querySelector("button");

//Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let ul = document.querySelector("ul");

//Save the reference to pargraph for errors | <p class="errors"></p>
let errors = document.querySelector(".feedback") 

//Start function addItem.
function addItem() {
    
    //Create list item and store output in a variable.
    let li = document.createElement("li");

    //Use innerHTML on created list item and assign it with user input from prompt("Enter a new item for to-do list:").
    if (input.value) {
    
        //If list item has a content:
        li.textContent = input.value;
        
        //Append list item to unordered list.
        
        ul.appendChild(li);

        //Clear an error-message.
        feedback.textContent = "";

        //Clear the text-field.
        input.value = "";
        
        //Put the cursor back to text-field
        input.focus();
        
    
    //End if & otherwise 
    } else {

        //Print the error message in the paragraph "errors"
        feedback.textContent = "Error";

    //End otherwise.
    }
//End function addItem.
}

//Register your button for click event - event handler will be addItem function.
btn.addEventListener("click", addItem);
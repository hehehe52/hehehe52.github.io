//addListNode is an element node that is used as a list item

//when add button is pressed, this function is called and it creates a element node and a text node, adds 
function getInputValueFunction() {
    let addListNode = document.createElement("li"); //creates itemnode as a list item
    
    //labels
    let inputValue = document.getElementById("addnewtask-input").value; //getElementByID reads the value of textfield and assigns it to inputValue
    addListNode.append(inputValue); //assigns the text content of inputValue to itemnode

    //yes checkbox
    let addYesCheckbox = document.createElement("input"); //creates checkbox element
    addYesCheckbox.type="checkbox"; //sets element to checkbox type
    addListNode.append(addYesCheckbox); //appends checkbox to list it
    
    //no checkbox
    let addNoCheckbox = document.createElement("input"); //creates element for nocheckbox
    addNoCheckbox.type="checkbox" //sets nocheckbox element type to checkbox
    addListNode.append(addNoCheckbox); //append nocheckbox element to list element


    addListNode.onclick = function() { //when the itemnode is clicked, it is removed from the list
        this.remove(); 
    }; 

    document.getElementById("list").append(addListNode); //appends the itemnode to the unordered list with the ID "list"
};

//add accordions for better readability
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "none")
            panel.style.display = "block";
        else panel.style.display = "none"
    })
}
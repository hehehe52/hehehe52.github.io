//addListNode is an element node that is used as a list item

/*when add button is pressed, this function is called and it creates a element node and a text node, adds 
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
}; */

//add button + modal logic
//set listener for button click. on button click unhide modal
/*const modal = document.getElementById("modal");
const btn = document.getElementById("modal-button");
const confirmBtn = document.getElementById("modal-save-button");
const closeBtn = document.getElementById("modal-close-button"); 
btn.addEventListener("click", function () {
    modal.style.display = "block"; 
})*/

//button + modal logic using querySelector method
const modalDialog = document.querySelector("#taskModal");
const showModal = document.querySelector("#modal-button");
const closeModal = document.querySelector("#modal-close-button")
const list = document.querySelector("#list")
const taskNameInput = document.querySelector("#modal-task-name-input")

//open modal on click
showModal.addEventListener("click", function() {
    modalDialog.showModal();
    modalDialog.returnValue = "";
    console.log(modalDialog.returnValue)
    // this line clears the value in returnValue property of modalDialog element. 
    // this clears the value before each input attempt into the modal. hacky fix to ensure old DOM data gets cleared
});

//close modal on click x button
/*closeModal.addEventListener("close", function() {
    modalDialog.close();
}); */

//check if return value of modal is 'save', means user wants to add new item, so we add the entry into the list
modalDialog.addEventListener("close", function() {


    if (modalDialog.returnValue === 'save') {
        let text = taskNameInput.value;
        console.log("User saved")


        const addListNode = document.createElement("li");
        addListNode.append(text);

        document.querySelector("#list").append(addListNode); //appends the itemnode to the ordered list with the ID "list"
    } else {
        console.log("User pressed esc or cancel")
    }   
});



//add accordions for better readability
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.classList.toggle("after");
        if (panel.style.display === "block")
            panel.style.display = "none";
        else panel.style.display = "block"; 
    })
};



//test
/*
const panel = document.querySelectorAll(".panel");
panel.addEventListener("click", function() {
    panel.classList.toggle("active");
});

*/
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
const closeModal = document.querySelector("#modal-close-button");
const list = document.querySelector("#list");
const taskNameInput = document.querySelector("#modal-task-name-input");


//open add new task modal on click
showModal.addEventListener("click", function() {
    modalDialog.showModal();
    modalDialog.returnValue = "";
    console.log(modalDialog.returnValue)
    // this line clears the value in returnValue property of modalDialog element. 
    // this clears the value before each input attempt into the modal. hacky fix to ensure old DOM data gets cleared
});


//check if return value of modal is 'save', means user wants to add new item, so we add the entry into the list
modalDialog.addEventListener("close", function() {


    if (modalDialog.returnValue === 'save') {
        let text = taskNameInput.value.trim(); //use trim function to get rid of spaces around the text
        console.log("User saved")

        
        const targetList = document.querySelector("#list-additional"); //target the <ol> element with id=list-entrance-additional
        const addListNode = document.createElement("li"); 
        const uniqueID = Date.now();
        
        addListNode.innerHTML = `
                            <span>${text}</span> 
                            <span>
                                <label for="${uniqueID}yes">Yes</label> <input type="radio" id="${uniqueID}yes" name="${uniqueID}" value="Yes">
                                <label for="${uniqueID}no">No</label> <input type="radio" id="${uniqueID}no" name="${uniqueID}" value="No" checked>
                                <label for="${uniqueID}NIL">NIL</label> <input type="radio" id="${uniqueID}NIL" name="${uniqueID}" value="NIL">
                            </span>
        `;

        targetList.append(addListNode);

    }
});

//upon page loading, modal will pop up and require user to enter room number
let roomNumber = ""

const roomNumberModal = document.querySelector("#room-number-modal")
const roomNumberInput = document.querySelector("#room-number-input")
const roomNumberDisplay = document.querySelector("#room-number-display")

window.addEventListener("load", () => {
    roomNumberModal.showModal();
}); //change to non arrow function by ctrl f =>

roomNumberModal.addEventListener("close", function() {
    roomNumber = roomNumberInput.value;
    roomNumberDisplay.textContent = roomNumberInput.value;
})

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

//add submit button logic to send data to google forms
const inspectionForm = document.querySelector("#inspection-form");

inspectionForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const reportData = []; //send this to spreadsheet

    const allItems = document.querySelectorAll("li") //select all <li> elements

    //loop through all items in the checklist, check for any list item with 'no' checked 
    allItems.forEach(function(item) {
        const taskName = item.querySelector("span").textContent; //it will always select the span containing the task name as it is the first span

        const taskStatus =  item.querySelector("input[type='radio']:checked"); //grab the value of this task's radio button 
        
        if (taskStatus.value === "No") { //if value of the radio button is no, the taskName and taskStatus of the current item in the loop will be added to the reportData array
            reportData.push({
                room: roomNumber,
                task: taskName,
                status: taskStatus.value
            });
        }
    });
    sendBatchToGoogle(reportData); //POST request with the array of all the failed items. shld be outside of the for each loop
});

function sendBatchToGoogle(putReportDataHere) { //putReportDataHere is where reportData is supposed to go when using the sendBatchToGoogle func
    const URL = "https://script.google.com/macros/s/AKfycbyR_slhptgyCwRUKGsE4PA86uecD9XiGn5lrjCBzbqww_qJ-hHXCPgjc6dgFjdN4hHGKQ/exec"

    fetch(URL, {
        method: "POST",
        mode: "no-cors", //deliver the message, ignore the response and errors, if not google will block the req
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(putReportDataHere)
    })

    .then( function() {
        alert("Report Submitted Successfully!");
    })
}

//test
/*
const panel = document.querySelectorAll(".panel");
panel.addEventListener("click", function() {
    panel.classList.toggle("active");
});

*/
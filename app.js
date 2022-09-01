const dateOfBirth = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#input-number");
const checkButton = document.querySelector("#check");
const outputDiv = document.querySelector("#output-div");


checkButton.addEventListener("click", check);



function check() {
    const dob = dateOfBirth.value
    const number = luckyNumber.value
    
    if(dob&&number){
        const dateSum = calculateDOB(dob , number)
        compareValues(dateSum , number)
    }
    else {
        showMessage("Please enter both fields!")

    }

}

function calculateDOB (dob , number) {
    var formattedDate = dob.replaceAll("-","")
    let sum=0;
    for(let i=0; i< formattedDate.length; i++){
        sum = sum + Number(formattedDate.charAt(i))
    }
    var ans = sum + Number(number)
    return ans;
}

function compareValues (dateSum, number){
    if ( dateSum % Number(number) == 0){
        showMessage("Your birthdate is Lucky.!")
    }
    else {
        showMessage("Your Birthdate is not Lucky!")
    }
}

function showMessage(message) {
    outputDiv.innerText = message
}
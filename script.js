import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://playground-7dac7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const expenditureInDB = ref(database, "expense")
const expenseListEl= document.getElementById("expenditure-list")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(expenditureInDB,inputValue)
    clearInputFieldEl()
    appendItemToExpenseListEl(inputValue)
    console.log(`${inputValue} added to database`)
})

function clearInputFieldEl(){
    inputFieldEl.value = ""
}
function appendItemToExpenseListEl(itemValue){
    expenseListEl.innerHTML += `<li>${itemValue}</li>`
}
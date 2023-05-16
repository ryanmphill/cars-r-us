import { setWheelChoice } from "./TransientState.js"


/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred option
*/
const handleWheelChoice = (event) => {
    // Check if the value of the item being changed is a metal
    if (event.target.id === "wheel") {
        const chosenOption = event.target.value
        setWheelChoice(parseInt(chosenOption))
    }
}


// Export a function that builds the html for the wheel choices and listens for the change event
export const WheelOptions = async () => {

    // Listen for the change event where the wheel choice is being changed:
    
    document.addEventListener("change", handleWheelChoice)
    

    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let html = ""
    html += '<select id="wheel" class="dropdown">'
    html += '<option value="0">Select a wheel option</option>'
    // Use map() to generate new array of strings
    const divStringArray = wheels.map(
        (wheel) => {
          return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")
    html += `</select>`

    return html
}
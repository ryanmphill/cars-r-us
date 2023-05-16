import { setInteriorChoice } from "./TransientState.js"


/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred option
*/
const handleInteriorChoice = (event) => {
    // Check if the value of the item being changed is a metal
    if (event.target.id === "interior") {
        const chosenOption = event.target.value
        setInteriorChoice(parseInt(chosenOption))
    }
  }


// Export a function that builds the html for the Interior choices and listens for the change event
export const InteriorOptions = async () => {

    // Listen for the change event where the Interior choice is being changed:
    
    document.addEventListener("change", handleInteriorChoice)
    

    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let html = ""
    html += '<select id="interior" class="dropdown">'
    html += '<option value="0">Select an interior option</option>'
    // Use map() to generate new array of strings
    const divStringArray = interiors.map(
        (interior) => {
          return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")
    html += `</select>`

    return html
}
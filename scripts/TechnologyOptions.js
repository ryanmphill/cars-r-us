import { setTechnologyChoice } from "./TransientState.js"


/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred option
*/
const handleTechnologyChoice = (event) => {
    // Check if the value of the item being changed is a metal
    if (event.target.id === "technology") {
        const chosenOption = event.target.value
        setTechnologyChoice(parseInt(chosenOption))
    }
}


// Export a function that builds the html for the technology choices and listens for the change event
export const TechnologyOptions = async () => {

    // Listen for the change event where the technology choice is being changed:
    
    document.addEventListener("change", handleTechnologyChoice)
    

    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let html = ""
    html += '<select id="technology" class="dropdown">'
    html += '<option value="0">Select a technology package</option>'
    // Use map() to generate new array of strings
    const divStringArray = technologies.map(
        (technology) => {
          return `<option value="${technology.id}">${technology.package} (includes ${technology.includes})</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")
    html += `</select>`

    return html
}
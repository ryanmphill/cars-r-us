// Set the initial state for the customers' orders
const transientState= {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}
////////////////////////////////////////////////
// Export Functions to save choices ////////////
////////////////////////////////////////////////
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

// Reset the transient state
export const resetTransientState = () => {
    transientState.paintId = 0
    transientState.interiorId = 0
    transientState.technologyId = 0
    transientState.wheelId = 0
}

////////////////////////////////////////////////////////////////////////////////////
// Export function to post the transient state to the api when button is clicked ///
////////////////////////////////////////////////////////////////////////////////////
export const submitOrder = async () => {

    // Check if all options are selected
    if (transientState.paintId > 0 && transientState.interiorId > 0 && transientState.technologyId > 0 && transientState.wheelId > 0) {
        // Define a postOptions object to specify a POST to the database
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState) // Turn the data into a string
        }

        // Send the transient state to your API
        const response = await fetch("http://localhost:8088/orders", postOptions)

        // Broadcast a custom event that the state has changed so the browser can listen and update
        const customEvent = new CustomEvent("carOrderPlaced")
        document.dispatchEvent(customEvent)
    } else {
        window.alert("Please choose an option for all categories")
    }
}

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
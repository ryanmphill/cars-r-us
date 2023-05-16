





// Export a function that builds the html for the paint choices and listens for the change event
export const PaintOptions = async () => {

    // Listen for the change event where the paint choice is being changed:
    /*
    document.addEventListener("change", handlePaintChoice)
    */

    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let html = ""
    html += '<select id="paint">'
    html += '<option value="0">Select an exterior paint color</option>'
    // Use map() to generate new array of strings
    const divStringArray = paints.map(
        (paint) => {
          return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")
    html += `</select>`

    return html
}
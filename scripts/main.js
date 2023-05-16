import { PaintOptions } from "./PaintOptions.js"





const render = async () => {
    
    const paintHTML = await PaintOptions()

    const container = document.querySelector("#container")

    const composedHTML = `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interiors</h2>
                
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                
            </section>
        </article>

        <article class="order">
            
        </article>

        <article class="orderList">
            <h2>Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}

render()
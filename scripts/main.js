import { InteriorOptions } from "./InteriorOptions.js"
import { OrderList } from "./OrderList.js"
import { PaintOptions } from "./PaintOptions.js"
import { PlaceOrderButton } from "./SubmitOrder.js"
import { TechnologyOptions } from "./TechnologyOptions.js"
import { resetTransientState } from "./TransientState.js"
import { WheelOptions } from "./WheelOptions.js"





const render = async () => {
    
    const paintHTML = await PaintOptions()
    const interiorHTML = await InteriorOptions()
    const technologyHTML = await TechnologyOptions()
    const wheelHTML = await WheelOptions()
    const buttonHTML = PlaceOrderButton()
    const orderHTML = await OrderList()

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
                ${interiorHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologyHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="orderList">
            <h2>Orders</h2>
            ${orderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener(
    "carOrderPlaced",
    event => {
        console.log(`A new order has been placed. Regenerating HTML...`)
        render()
        resetTransientState()
    }
)
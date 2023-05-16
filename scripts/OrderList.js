

// Export a function that will make an HTML list of the posted orders
export const OrderList = async () => {

    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()

    let html = ""
    const orderDivStringArray = orders.map(
        (order) => {
            // Add all prices together from expanded orders objects
            const totalPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            // To automatically format the number as currency
            const formattedPrice = totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<div class="orderList--div">Order #${order.id} costs ${formattedPrice}</div>`
        }
    )
    html = orderDivStringArray.join("")
    return html
}
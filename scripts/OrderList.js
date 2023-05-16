

// Export a function that will make an HTML list of the posted orders
export const OrderList = async () => {

    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()

    let html = ""
    const orderDivStringArray = orders.map(
        (order) => {
            return `<div class="orderList--div">Order #${order.id} was placed</div>`
        }
    )
    html = orderDivStringArray.join("")
    return html
}
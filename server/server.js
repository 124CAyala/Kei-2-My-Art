require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static("public"))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 1999, name: "Glasses" }],
    [2, {priceInCents: 999, name: "Bottles"}],
])

app.post('/create-checkout-session', async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: [ 'card' ],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.SERVER_URL}`,
            cancel_url: `${process.env.SERVER_URL}/products`
        })
        res.json({ url: session.url })
        // console.log(state.cart);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
    
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// try {
//     app.listen(3001, () => {
//         console.log("Server is running on port 3001");
//     });
// } catch (error) {
//     console.error("Error starting server:", error);
// }


// app.listen(3001)
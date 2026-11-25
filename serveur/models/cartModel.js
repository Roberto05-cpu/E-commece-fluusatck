const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    items: [
        {
            produit: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantite: Number
        }
    ],
    totalPrice: Number
})

const cartModel = mongoose.model("cart", cartSchema)

module.exports = cartModel
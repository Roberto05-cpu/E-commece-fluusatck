const cartModel = require("../models/cartModel");
const ProductModel = require("../models/ProductModel");

const getCartController = async (req, res) => {
  try {
    let cart = await cartModel
      .findOne({ user: req.user.id })
      .populate("items.produit");

    if (!cart) {
      cart = await cartModel.create({
        user: req.user.id,
        items: [],
        totalPrice: 0,
      });
    }

    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erreur lors de la recuperation du panier. API",
    });
  }
};

const addProductToCartController = async (req, res) => {
  try {
    const { produitId, quantite } = req.body;

    const product = await ProductModel.findById(produitId);
    if (!product)
      return res.status(404).json({ message: "Produit introuvable !" });

    let cart = await cartModel.findOne({ user: req.user.id });

    if (!cart) {
      cart = await cartModel.create({
        user: req.user.id,
        items: [],
        totalPrice: 0,
      });
    }

    // Vérifier si produit existe déjà
    const itemIndex = cart.items.findIndex(
      (i) => i.produit.toString() === produitId
    );

    if (itemIndex !== -1) {
      cart.items[itemIndex].quantite += quantite;
    } else {
      cart.items.push({ produit: produitId, quantite });
    }

    cart.totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantite * product.price;
    }, 0);

    await cart.save();
    cart = await cart.populate("items.produit");

    res.json({ message: "Ajouté au panier !", cart });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erreur lors de l'ajout du produit au panier. API",
    });
  }
};

const updateCartController = async (req, res) => {
  try {
    const { quantite } = req.body;
    const { produitId } = req.params;

    let cart = await cartModel.findOne({ user: req.user.id }).populate("items.produit");
    if (!cart) return res.status(404).json({ message: "Panier introuvable" });

    // Trouver l'item
    const item = cart.items.find(i => i.produit._id.toString() === produitId);
    if (!item) return res.status(404).json({ message: "Produit absent du panier" });

    // Mettre à jour la quantité
    item.quantite = quantite;

    // Recalculer le total
    cart.totalPrice = cart.items.reduce((acc, i) => acc + i.produit.price * i.quantite, 0);

    // Sauvegarder
    const savedCart = await cart.save();

    // Retourner le panier avec les produits peuplés
    await savedCart.populate("items.produit");

    res.json(savedCart);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erreur lors de la modification du panier. API",
    });
  }
};

const removeItemController = async (req,res) => {

    try {
        const {productId} = req.params
        if (!productId) {
            return res.status(400).send({
                success: false,
                message: "Entrez l'id du produit"
            })
        }

        const cart = await cartModel.findOne({ user: req.user.id })
        if (!cart) {
            return res.status(404).send({
                success: false,
                message: "Panier inexistant"
            })
        }

        const produit = await ProductModel.findById(productId)
        if (!produit) {
            return res.status(404).send({
                success: false,
                message: "ce produit n'existe pas"
            })
        }

        const existingProduitcart = cart.items.find(i => i.produit.toString() === productId)
        if (!existingProduitcart) {
            return res.status(404).send({
                success: false,
                message: "Produit non existant dans le panier"
            })
        }

        cart.items = cart.items.filter(i => i.produit.toString() !== productId)

        let total = 0
        for (const item of cart.items) {
            const prod = await ProductModel.findById(item.produit)
            if (prod) {
                total += prod.prix * item.quantite
            }
        }

        cart.totalPrice = total

        await cart.save()

        res.status(200).send({
            success: false,
            message: "Produit supprime du panier",
            cart
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Erreur lors de la suppression des produits au panier. API"
        })
    }

}

module.exports = {
  getCartController,
  addProductToCartController,
  updateCartController,
  removeItemController
};

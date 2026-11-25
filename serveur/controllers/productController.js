const ProductModel = require('../models/ProductModel');

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, oldPrice, category, stock } = req.body;

    if (!title || !description || !price || !category || !stock) {
        return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis" });
    } 

    if (!req.file) {
      return res.status(400).json({ message: "Une image est requise" });
    }

    const image = {
       url: `/uploads/${req.file.filename}`,
       filename: req.file.filename
    };

    const product = new ProductModel({
      title,
      description,
      price,
      oldPrice,
      category,
      stock,
      image
    });

    await product.save();

    res.status(201).json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la création du produit" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Produit non trouvé" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updates = req.body;

     if (req.file) {
        updates.image = {
           url: `/uploads/${req.file.filename}`,
           filename: req.file.filename
        };
    }

    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!product) return res.status(404).json({ message: "Produit non trouvé" });

    res.json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la mise à jour" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Produit non trouvé" });

    res.json({ message: "Produit supprimé" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la suppression" });
  }
};

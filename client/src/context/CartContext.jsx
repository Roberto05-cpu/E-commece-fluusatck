import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = sessionStorage.getItem("token");

  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Charger le panier au démarrage
  useEffect(() => {
    if (token) {
      api.get("/cart/getcart").then((res) => setCart(res.data.items));
    }
  }, [token]);

  // Ajouter au panier
  const addToCart = async (p) => {
    await api.post("/cart/addproduct", {
      produitId: p._id,
      quantite: 1,
    });

    const res = await api.get("/cart/getcart");
    setCart(res.data.items);
  };

  // Modifier quantité
  const updateQty = async (id, qty) => {
    // Mise à jour locale immédiate
    setCart((prev) =>
        prev.map((item) =>
          item.produit._id === id ? { ...item, quantite: qty } : item
        )
      );
    try {
      await api.put(`/cart/update/${id}`, { quantite: qty });
      // tu peux re-fetch si tu veux être sûr
    } catch (err) {
      console.error(err);
    }
  };

  // Supprimer un produit
  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/remove/${id}`);
      setCart((prev) => prev.filter((item) => item.produit._id !== id));
      // re-fetch si besoin
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

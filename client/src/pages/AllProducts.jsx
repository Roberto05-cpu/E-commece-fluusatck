import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaStar } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import ProductCard from "../Components/ProductCard";

export default function AllProducts() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleAdd = (p) => {
    if (!token) {
      alert("Vous devez vous connecter pour ajouter au panier !");
      return navigate("/login");
    }

    // Appel à la fonction du contexte
    addToCart(p)
      .then(() => alert("Produit ajouté au panier !"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des produits", err);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Tous les Produits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3 ml-[100px] mr-[100px]">
        {products.map((p) => (
         <div className="flex flex-col items-center justify-center h-[500px] shadow shadow-gray-200 hover:scale-105 transition">
          <ProductCard name={p.title} img={`http://localhost:3000${p.image.url}`} oldPrice={p.oldPrice} newPrice={p.price} nbre={(100 - (p.price / p.oldPrice)*100).toFixed(0)}/>
          <span>Stock disponible: {p.stock}</span>
          <div className="mt-3">
            <button onClick={() => handleAdd(p)} className="py-3 px-6 bg-green-500 text-white font-semibold rounded-xl cursor-pointer">Add To Cart</button>
          </div>
         </div>  
        ))}
      </div>
    </div>
  );
}

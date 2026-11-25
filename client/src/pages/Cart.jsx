import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQty, removeItem } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);

  // Calculer le total à chaque changement du panier
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.produit.price * item.quantite, 0);
    setSubtotal(total)
  }, [cart]);

  if (!cart || cart.length === 0) {
    return (
      <div className='text-center mt-20'>
        <h2 className='text-2xl font-semibold mb-4'>Votre panier est vide</h2>
        <Link to="/">
          <button className='py-2 px-5 text-center border border-gray-600 rounded-[5px]'>
            Retourner au shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className='flex flex-col gap-5 mt-10 md:ml-[100px] md:mr-[100px] md:w-[1320px]'>
        <li className='flex justify-between items-center shadow shadow-gray-300 h-[72px] w-full px-5'>
          <p className='md:flex-2 flex-1'>Produit</p>
          <p className='flex-1'>Prix</p>
          <p className='flex-1'>Quantité</p>
          <p className='flex-1'>Sous-total</p>
          <p className='flex-1'>Supprimer</p>
        </li>

        {cart.map((item) => (
          <li key={item.produit._id} className='flex justify-between items-center shadow shadow-gray-300 h-[72px] w-full px-5'>
            
            <div className='flex gap-2 items-center flex-2'>
              <img src={`http://localhost:3000${item.produit.image.url}`} alt={item.produit.title} className='w-[54px] h-[54px] hidden md:block' />
              <p>{item.produit.title}</p>
            </div>

            <p className='flex-1'>${item.produit.price}</p>

            <input
              type="number"
              min={1}
              className='w-[50px] p-1 flex-1 bg-gray-200 rounded-xl pl-5'
              value={item.quantite}
              onChange={(e) => updateQty(item.produit._id, Number(e.target.value))}
            />

            <p className='flex-1'>${Number(item.produit.price) * Number(item.quantite)}</p>

            <button
              onClick={() => removeItem(item.produit._id)}
              className='text-red-500 font-bold flex-1'
            >
              X
            </button>

          </li>
        ))}

      </ul>

      <div className='mt-5 ml-[100px] mr-[100px] flex justify-between'>
        <Link to="/">
          <button className='py-2 px-5 text-center border border-gray-600 rounded-[5px]'>
            Retourner au shop
          </button>
        </Link>
      </div>

      <div className='mt-16 md:ml-[1000px] md:mr-[100px] flex justify-between md:items-start ml-4'>
        <div className='w-[470px] border border-gray-600 rounded-[5px] p-4 flex flex-col gap-5'>
          <h3 className='font-semibold text-2xl'>Total du panier</h3>

          <div className='flex items-center justify-between pb-2 border-b border-b-gray-400'>
            <p>Sous-totaux:</p>
            <span>${subtotal}</span>
          </div>

          <div className='flex items-center justify-between pb-2 border-b border-b-gray-400'>
            <p>Livraison</p>
            <span>Gratuite</span>
          </div>

          <div className='flex items-center justify-between'>
            <p>Total:</p>
            <span>${subtotal}</span>
          </div>

          <button className='bg-red-500 w-[260px] h-[56px] text-white text-center font-semibold rounded-[5px] ml-[70px] cursor-pointer'>
            Passer à la caisse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

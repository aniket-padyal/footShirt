// CartDrawer.jsx
import React from "react";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose} className="text-xl font-bold">
          &times;
        </button>
      </div>
      <div className="p-4">
        {/* Your cart items here */}
        <p>Cart is empty</p>
      </div>
    </div>
  );
};

export default CartDrawer;


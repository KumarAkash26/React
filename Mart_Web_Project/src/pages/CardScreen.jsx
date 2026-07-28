import React from "react";
import CartCard from "../components/CartCard";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CardScreen = () => {
  let { cartItems, tPrice } = useContext(MyStore);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Cart is Empty
          </h2>
          <p className="mt-2 text-gray-500">Add some products to your cart.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {cartItems.map((elem) => (
              <CartCard key={elem.id} product={elem} />
            ))}
          </div>
          
          <div className="h-fit rounded-2xl border border-gray-300 bg-white shadow-md p-6 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold border-b pb-4">Order Summary</h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-green-600">${tPrice.toFixed(2)}</span>
              </div>

              <button className="w-full rounded-xl bg-black py-3 text-white font-semibold transition hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardScreen;

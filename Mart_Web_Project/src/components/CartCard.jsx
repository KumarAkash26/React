import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ product }) => {

  const {
    incQuantity,
    decQuantity,
    remItem
  } = useContext(MyStore);

  return (
    <div className="mt-3 w-sm flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
            {product.title}
          </h3>

          <p className="mt-2 text-2xl font-bold text-indigo-600">
            ${product.price}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-2 py-1">
            <button onClick={() => decQuantity(product.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:bg-indigo-500 hover:text-white">
              <Minus size={16} />
            </button>

            <span className="w-6 text-center font-semibold">{ product.quantity }</span>

            <button onClick={() => incQuantity(product.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:bg-indigo-500 hover:text-white">
              <Plus size={16} />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button onClick={() => remItem(product.id)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600">
              <Trash2 size={18} />
              Remove
            </button>

            <div className="mt-2 flex flex-col items-center justify-between">
              <span className="text-sm text-green-600 font-medium">
                ✓ In Stock
              </span>
              
              <span className="text-sm font-semibold text-gray-500">
                Total: ${(product.price * product.quantity).toFixed(2)}
              </span>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

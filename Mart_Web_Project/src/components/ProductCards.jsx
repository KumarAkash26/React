import React from 'react';
import { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const ProductCard = ({ product, isInCart }) => {
    const addToCard = () => {
        setcartItems((prev) => [...prev, {...product }])
        alert("Item is added into Cart")
    }

    let { setcartItems } = useContext(MyStore);

    return (
    <article className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="line-clamp-2 min-h-14 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-100 px-2 py-1">
            <span className="text-sm font-semibold text-yellow-700">
              {product.rating?.rate}
            </span>

            <span className="text-yellow-500">★</span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

         {isInCart ? (<button className='bg-green-300 px-5 py-3 rounded-xl text-green-900 font-semibold'>
            <span>Added</span>
         </button>)
         :(
             <button 
          onClick={ addToCard }
            type="button"
            className="rounded-xl bg-gray-900  px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700 active:scale-95"
          >
            Add to Cart
          </button>
         )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
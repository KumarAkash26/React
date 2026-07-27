import React from 'react'

const CartCard = ({ product }) => {
  return (
    <div className='border rounded p-4'>

         <div className="flex h-24 w-24  items-center justify-center rounded-xl bg-gray-100 p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
        <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-1 text-base font-bold text-gray-900">
                    ${product.price}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    {/* Quantity buttons */}
                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                      <button
                        type="button"
                        
                        aria-label={`Decrease quantity of ${product.title}`}
                        className="h-8 w-8 text-lg text-gray-700 transition hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="flex h-8 min-w-9 products-center justify-center items-center border-x border-gray-300 px-2 text-sm font-semibold">
                        {/* {product.quantity} */}1
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.title}`}
                        className="h-8 w-8 text-lg text-gray-700 transition hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  </div>

    </div>
  )}

export default CartCard
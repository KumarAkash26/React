import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductCards from "../components/ProductCards";

import { MyStore } from '../context/MyContext';


const Shop = () => {
     
  const [productsData, setproductsData] = useState([]);
  

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setproductsData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-3">
        <div className="grid grid-cols-5 gap-3">
          {productsData.map((elem) => {
            return (
              <ProductCards
                key={elem.id}
                product={elem}
              />
            );
          })}
        </div>
      
    </div>
  )}


export default Shop
import React from 'react'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'



const CardScreen = () => {

    let { cartItems } = useContext(MyStore);
  return (
    <div>
       {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem}/>
       })
       }
    </div>
  )
}

export default CardScreen
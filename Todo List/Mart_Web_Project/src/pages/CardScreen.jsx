import React from 'react'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'



const CardScreen = () => {

    let { cartItems } = useContext(MyStore);
  return (
    <div className='h-screen grid grid-cols-4 min-w-screen gap-4 pl-50 pr-50'>
       {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem}/>
       })
       }
    </div>
  )
}

export default CardScreen
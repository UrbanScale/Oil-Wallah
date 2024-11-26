import React from 'react'
import Card from '../components/Card'

function Home({data,setCount,isLoggedIn,setCartItems}) {
    
  return (
    <div>
        <Card data = {data} setCount={setCount} isLoggedIn={isLoggedIn} setCartItems={setCartItems}></Card>
    </div>
  )
}

export default Home
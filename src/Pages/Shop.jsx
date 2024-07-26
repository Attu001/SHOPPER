import React from 'react'
import Hero from '../Componentes/Hero/Hero'
import Popular from '../Componentes/Popular/Popular'
import Offers from '../Componentes/Offers/Offers'
import NewCollection from '../Componentes/NewCollection/NewCollection'
import OldLetter from '../Componentes/NewsLetter/OldLetter'


const Shop = () => {
  return (
    <div>

      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <OldLetter />
     

    </div>
  )
}

export default Shop
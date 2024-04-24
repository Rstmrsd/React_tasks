import React from 'react'
import data from "../data.js"
const Products = () => {
  return (
    <>
      <ul>
        {data.map((item)=>{
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default Products


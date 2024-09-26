import React from "react"
import Cards from "./Cards"
import pizzaData from "../PizzaData"

const In_progess = ()=>
    {
      return(
           <>
              <p>
                Currently working on the Menu. Be sure to Visit us Later :
              </p>
              <div className='order'><button className='btn'>Order</button></div>
             </> 
      )
    
    }

const createCard = (data)=>{
    console.log(data.SoldOut)
    return (
          <Cards
            name = {data.name}
            ingredients = {data.ingredients}
            image = {data.photoName}
            price = {data.price}
            quatity = {data.price}
            SoldOut = {data.soldOut}
          />
    )
  }

const Menu = (val)=>{

    return(
        <div className='menu'>
          <h2>Our menu</h2>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from all from one oven. All organic, All delicious</p>
          <div className='pizzas'>
          {pizzaData.map(createCard)}
         </div>
         </div>
)
}

export {Menu,createCard,In_progess};
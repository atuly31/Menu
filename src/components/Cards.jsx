import React from 'react'
import Heading from './Heading';
import Description from './description';
import Pizza_img from './Pizza_img';
import Quatity from './quatity';
const Cards = (props) => {
  return (
    <div className={`pizza ${props.SoldOut? "sold-out":""} `}>
      <Pizza_img image ={props.image}/>
      <div>
      <Heading title = {props.name}/>
      <Description des = {props.ingredients}/>
      <Quatity quatity={props.quatity}
       SoldOut = {props.SoldOut}/>
      </div>
      
    </div>
  )
}

export default Cards

import React from 'react'

const Quatity = (props) => {
  return (
    <span>{props.SoldOut ? "Sold Out": props.quatity}</span>
  )
}

export default Quatity

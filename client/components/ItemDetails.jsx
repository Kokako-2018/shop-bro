import React from 'react'

export default function ItemDetails (props) {
  const {item, isVisible, hideDetails} = props
  const classes = 'item-details ' + (isVisible ? 'visible' : 'hidden')

  console.log(props)
  return (
    <div className={classes}>
    
      <p>Item: {props.item}</p>
      <p>Cost: {props.cost}</p>
      <a href='#' onClick={hideDetails}>Close</a>
    </div>
  )
}
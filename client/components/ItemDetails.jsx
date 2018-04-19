import React from 'react'

export default function ItemDetails (props) {
  const {item, isVisible, hideDetails} = props
  const classes = 'item-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className={classes}>
      <p>Item: {item.name}</p>
      <p>Price: {item.cost}</p>
      <a href='#' onClick={hideDetails}>Close</a>
    </div>
  )
}
import React from 'react'
import ListItem from './ListItem.jsx'

export default function ItemList (props) {
    
    return (
      <div className='item-list'>
        <h2 class="title is-3">Shopping List</h2>
        {props.items.map(item => {
          return <ListItem item={item} />
        })}
      </div>
    )
  }
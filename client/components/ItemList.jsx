import React from 'react'
import ListItem from './ListItem.jsx'

export default function ItemList (props) {
    
    return (
      <div className='item-list'>
        <h2 className="title is-3">Shopping List</h2>
        {props.items.map(item => {
          return <ListItem item={item} refresh={props.refresh} />
        })}
      </div>
    )
  }
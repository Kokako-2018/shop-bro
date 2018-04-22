import React from 'react'
import ListItem from './ListItem.jsx'

export default function ItemList (props) {
    
    return (
      <div className='item-list'>
        <h2>Shopping List</h2>
        {props.items.map(item => {
          console.log(item, 'test')
          return <ListItem
          /*  key={proverb.id} */
            item={item}
        /*    hideDetails={props.hideDetails} */
          /*  showDetails={props.showDetails} */ />
        })}
      </div>
    )
  }
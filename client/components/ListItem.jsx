import React from 'react'

export default function ListItem ({item}) {
    // console.log(item.item, 'here')
    return (
        <div className='list-item'>
         <div class="columns">
         <div class="column">
          <ul>
            <li>Item: {`${item.item}`}</li>
            <li>Cost: {`${item.cost}`}</li>
          </ul>
         </div>
         </div>
        </div>
    )
}
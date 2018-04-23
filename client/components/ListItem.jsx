import React from 'react'

export default function ListItem ({item}) {
    console.log(item, 'here')
    return (
        <div className='list-item'>
         <div class="columns">
         <div class="column">
          <ul>
            <li>Item: {`${item.item}`}</li>
            <li>Cost: {`${item.cost}`}</li>
          </ul>
          <button id={`${item}`}>Update</button>
         </div>
         </div>
        </div>
    )
}
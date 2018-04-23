import React from 'react'
import {deleteItem} from '../api'
import App from './App'

export default function ListItem ({item}) {
    
    console.log(item, 'here')

    function delItem () {
        deleteItem(item.id, callback)
    }

    return (
        <div className='list-item'>
         <div class="columns">
         <div class="column">
          <ul>
            <li class="has-text-weight-semibold">Item: {`${item.item}`}</li>
            <li>Cost: {`${item.cost}`}</li>
          </ul>
          <button onClick={delItem}>Delete</button>
         </div>
         </div>
        </div>
    )
}
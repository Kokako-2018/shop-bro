import React from 'react'
import {deleteItem} from '../api'
import App from './App'

export default function ListItem ({item, refresh}) {
    
    console.log(item, refresh, 'here')

    // function delItem () {
    //     console.log(this.refresh)
    //     deleteItem(item.id, this.refresh)
    // }

    return (
        <div className='list-item'>
        {/* {console.log(refresh)} */}
         <div class="columns">
         <div class="column">
          <ul>
            <li class="has-text-weight-semibold">Item: {`${item.item}`}</li>
            <li>Cost: {`${item.cost}`}</li>
          </ul>
          <button onClick={() =>deleteItem(item.id, refresh)} >Delete</button>
         </div>
         </div>
        </div>
    )
}
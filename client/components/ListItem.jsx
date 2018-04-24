import React from 'react'
import {deleteItem, updateItem} from '../api'
import App from './App'
import UpdateItem from './UpdateItem'

export default function ListItem ({item, refresh}) {

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
          {/* <button onClick={() =>updateItem(item.id, refresh)} >Update</button> */}
         </div>
         </div>
        </div>
    )
}
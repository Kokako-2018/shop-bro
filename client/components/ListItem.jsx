import React from 'react'
import {deleteItem, updateItem} from '../api'
import App from './App'
import UpdateItem from './UpdateItem'

export default function ListItem ({item, refresh}) {

    return (
        <div className='content'>
        {/* {console.log(refresh)} */}
         <div class="columns">
         <div class="column">
          <ul>
            <li className="is-size-5 has-text-weight-semibold">Item: {`${item.item}`}</li>
            <li className="is-size-5">Cost: {`${item.cost}`}</li>
          </ul>
          
          <button className="delete is-large" onClick={() =>deleteItem(item.id, refresh)} ></button>
          {/* <button onClick={() =>updateItem(item.id, refresh)} >Update</button> */}
          <br/>
         </div>
         </div>
        </div>
    )
}
import React from 'react'
import {deleteItem, updateItem} from '../api'
import App from './App'
import UpdateItem from './UpdateItem'

export default function ListItem ({item, refresh}) {

    return (
        <div className='content'>
          <div className="block">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <ul>
                        <li className="is-size-5 has-text-weight-semibold">Item: {`${item.item}`}</li>
                        <li className="is-size-5">Cost: {`${item.cost}`}</li>
                    </ul>
                    
                    <button className="button is-dark" onClick={() =>deleteItem(item.id, refresh)} >Delete</button>
                    {/* <button onClick={() =>updateItem(item.id, refresh)} >Update</button> */}
                    <br/>
                </div>
            </div>
          </div>
        </div>
    )
}
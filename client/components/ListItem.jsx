import React from 'react'

export default function ListItem ({item}) {
    console.log(item.item, 'here')
    return (
        <div className='list-item'>
          <ul>
            <li>{`${item.item}`}</li>
            <li>{`${item.cost}`}</li>
          </ul>
        </div>
    )
}
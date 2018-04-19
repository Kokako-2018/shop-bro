import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {appendItem} from '../api'


export default class AddItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    addItem (e) {
      appendItem(this.state, this.props.finishAdd)
    }

    render() {
      return <div>
         <div class="column">
           <div class="field has-addons">
             <div class="control">
               <input onChange={this.handleChange} class="input is-medium" type="text"  />
             </div>
             <div class="control">
               <a class="button is-medium" onClick={this.addItem} type="submit" value="add item">
                 Add
               </a>
               <a href='#' onClick={this.props.finishAdd}>Cancel</a>
             </div>
           </div>
         </div>
        {/* <input onChange={this.handleChange} type="text" name="Item" placeholder="Shop Item" /> */}
        {/* <input type="submit" value="Add item"/> */}
      </div>
    }
}

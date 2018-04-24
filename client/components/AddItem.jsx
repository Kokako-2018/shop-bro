import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {appendItem} from '../api'


export default class AddItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: {
              item: '',
              cost: null
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(e) {
        let newItem = {}
        newItem[e.target.name] = e.target.value
        this.setState({item: newItem})
    }

    addItem (e) {
      appendItem(this.state.item, this.props.finishAdd)
      this.setState({
        item: {
          item: '',
          cost: null
        }
      })
    }

    render() {
      return <div>
         <div className="column">
           <div className="field has-addons">
             

               <input onChange={this.handleChange} className="input is-medium" type="text" name="item" value={this.state.item.item}/>
             
             <div className="control">
               <a className="button is-medium" onClick={this.addItem} type="submit" value="add item">
                 Add
               </a>
             </div>
           </div>
         </div>
        {/* <input onChange={this.handleChange} type="text" name="Item" placeholder="Shop Item" /> */}
        {/* <input type="submit" value="Add item"/> */}
      </div>
    }
}

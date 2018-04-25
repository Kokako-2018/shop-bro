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
        this.handleChangeTwo = this.handleChangeTwo.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(e) {
        let newItem = {}
        newItem[e.target.name] = e.target.value
        this.setState({item: newItem})
    }

    handleChangeTwo(e) {
      let newCost = {}
      newCost[e.target.name] = e.target.value
      this.setState({cost: newCost})
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
        <br/>
         <div className="column is-mobile">
           <div className="field has-addons">
             

               <input onChange={this.handleChange} className="input is-medium" type="text" name="item" placeholder="Enter item" value={this.state.item.item}/>
               <input onChange={this.handleChangeTwo} className="input is-medium" type="text" name="cost" placeholder="Enter cost" value={this.state.item.cost}/>
             
             <div className="control">
               <a className="button is-medium is-primary is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
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

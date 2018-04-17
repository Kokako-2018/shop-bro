import React from 'react'

class Item extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: ''
        }
    }

    handleChange(e) {
        var key = e.target.name
        this.setState(key)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.makeItemForm(this.state)
    }

    render() {
      return <div>
         <div class="column">
           <div class="field has-addons">
             <div class="control">
               <input onChange={this.handleChange} class="input is-large" type="text"  name="Add item" placeholder="Add item"/>
             </div>
             <div class="control">
               <a class="button is-large" type="submit" value="add item">
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

export default Item
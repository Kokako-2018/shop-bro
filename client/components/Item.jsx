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
             <p class="control">
              <span class="icon has-text-success">
                <i class="fas fa-check-square"></i>
              </span>
             </p>
             <p class="control">
               <input onChange={this.handleChange} class="input" type="text"  name="Add shopping item" placeholder="Add shopping item"/>
             </p>
             <p class="control">
               <a class="button" type="submit" value="add item">
                 Add
               </a>
             </p>
           </div>
         </div>
        {/* <input onChange={this.handleChange} type="text" name="Item" placeholder="Shop Item" /> */}
        {/* <input type="submit" value="Add item"/> */}
      </div>
    }
}

export default Item
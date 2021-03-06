import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Cost extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cost: ''
        }
    }

    handleChange(e) {
        var key = e.target.name
        this.setState(key)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.makeCostForm(this.state)
    }

    render() {
      return <div>
        
        <div className="column">
           <div className="field has-addons">
             <div className="control">
               <input onChange={this.handleChange} className="input is-medium" type="text"  name="Add price" placeholder="$--.--"/>
             </div>
             <div className="control">
               <a className="button is-medium" type="submit" value="=">
                 Spent
               </a>
             </div>
           </div>
         </div>
        
        {/* <input onChange={this.handleChange} type="text" name="Cost" placeholder="Item Cost" /> */}
        {/* <input type="submit" value="Calculate cost"/> */}

    </div>
    }
}

export default Cost
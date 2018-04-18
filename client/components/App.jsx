import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from "./Home"
import Item from './Item'
import Cost from './Cost'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1, item: ''
                },
                {
                    id: 2, cost: 0
                }
            ]
        }
        this.makeItemForm = this.makeItemForm.bind(this)
        // this.makeCostForm = this.makeCostForm.bind(this)
    }

    makeItemForm(item) {
        const items = thiis.state.items
        item.id = items.length + 1
        items.push(item)
        console.log(item)
        this.setState({items})
    }

    // makeCostForm(cost) {
    //     cost.id = cost.length + 1
    //     cost.push(cost)
    //     console.log(cost)
    //     this.setState({cost})
    // }

    render() {
        return <div>
        <Router> 
            <div>
                <Route exact path='/' component={Home} />
                <br/>
                
                <div class="column">
                    <div class="field has-addons">
                        <div class="control">
                            <input onChange={this.handleChange} class="input is-large" type="text"  name="Spend amount" placeholder="Enter your budget"/>
                        </div>
                        <div class="control is-centered">
                            <a class="button is-large is-success is-outlined" type="submit" value="=">
                            Budget
                            </a>
                        </div>
                    </div>
                </div>
                
                <br/>
                    <div class="columns">
                    <progress class="progress is-danger is-small is-flex-mobile" value="5" max="100">60%</progress>
                    </div>
                <br/>

                {/* Start of list part */}
                <div class="columns is-gapless is-multiline">
                    <div class="column is-half">
                        <Item item={this.item} />
                    </div>
                    <div class="column is-half">
                        <Cost cost={this.cost} />
                    </div>
                </div>
            </div>
        </Router>
        </div>
    }
}


export default App
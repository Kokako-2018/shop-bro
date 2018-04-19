import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from "./Home"
import AddItem from './AddItem'
import Cost from './Cost'
import ErrorMessage from './ErrorMessage'

import {getItems} from '../api'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null, 
            items: [
                {
                    id: 1, item: ''
                },
                {
                    id: 2, cost: 0
                }
            ],
            activeItem: null,
            detailsVisible: false,
            addItemVisible: false
        }
        this.refreshList = this.refreshList.bind(this)
        this.showDetails = this.showDetails.bind(this)
        this.hideDetails = this.hideDetails.bind(this)
        this.renderItems = this.renderItems.bind(this)
        this.makeItemForm = this.makeItemForm.bind(this)
        // this.showAddWidget = this.showAddWidget.bind(this)
        // this.makeCostForm = this.makeCostForm.bind(this)
    }

    componentDidMount () {
        this.refreshList()
      }
    
    renderItems (err, items) {
    this.setState({
        error: err,
        items: [items] || []
    })
    }

    refreshList (err) {
    this.setState({
        error: err,
        addItemVisible: false
    })

    getItems(this.renderItems)
    }

    showAddItem () {
    this.setState({
        addItemVisible: true
    })
    }

    showDetails (item) {
    this.setState({
        activeItem: item,
        detailsVisible: true
    })
    }

    hideDetails () {
    this.setState({
        detailsVisible: false
    })
    }

    makeItemForm(item) {
        const items = this.state.items
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
        <ErrorMessage error={this.state.error} />
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
                    <progress class="progress is-danger is-small" value="5" max="100">60%</progress>
                    </div>
                <br/>

                {/* Start of list part */}
                <div class="columns is-gapless is-multiline">
                    <div class="column is-half">
                        <AddItem item={this.item} finishAdd={this.refreshList}/>
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

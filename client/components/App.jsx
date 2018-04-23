import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from "./Home"
import AddItem from './AddItem'
import Cost from './Cost'
import ErrorMessage from './ErrorMessage'
import ItemDetails from './ItemDetails'
import CompletedButton from './CompletedButton'
import ItemList from './ItemList'
import ListItem from './ListItem'


import {getItems} from '../api'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null, 
            items: [],
            // cost: null,
            activeItem: null,
            detailsVisible: false,
            addItemVisible: false,
            showEdit: false,
            playing: false
        }
        this.refreshList = this.refreshList.bind(this)
        this.showDetails = this.showDetails.bind(this)
        this.hideDetails = this.hideDetails.bind(this)
        this.renderItems = this.renderItems.bind(this)
        this.makeItemForm = this.makeItemForm.bind(this)
        // this.showAddItem = this.showAddWidget.bind(this)
        // this.makeCostForm = this.makeCostForm.bind(this)
        this.startPlaying = this.startPlaying.bind(this)
    }

    componentDidMount () {
        this.refreshList()
      }
    
    renderItems (err, items) {
    this.setState({
        error: err,
        items: items || []
      })
    }

    refreshList () {
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
        this.setState({items})
    }

    startPlaying() {
        this.setState({playing: !this.state.playing})
    }    

    // makeCostForm(item) {
    //     item.id = item.cost.length + 1
    //     items.push(item)
    //     console.log(item)
    //     this.setState({items})
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
                    <div class="column">
                    <progress class="progress is-danger is-small" value="5" max="100">60%</progress>
                    </div>
                <br/>

                <ItemList 
                refresh={this.refreshList}
                showDetails={this.showDetails}
                items={this.state.items} />
                
               
                {/* Start of list part */}
                <div class="columns is-gapless is-multiline">

                    <div class="column is-half">
                        <AddItem item={this.item} finishAdd={this.refreshList}/>
                    </div>

                    <div class="column is-half">
                        <Cost cost={this.cost} />
                    </div>

                </div>

                <div class="column">
                  <div class="control is-centered">
                    <CompletedButton playing={this.state.playing} startPlaying={this.startPlaying} />
                  </div>
                </div>
            
            </div>
        </Router>
        </div>
    }
}

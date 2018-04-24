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
import UpdateItem from './UpdateItem'


import {getItems} from '../api'
import * as api from '../api'

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
            updateWidgetVisible: false,
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
        this.showUpdateItem = this.showUpdateItem.bind(this)
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

    showUpdateItem () {
        this.setState ({
            updateWidgetVisible: true
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

    showEditForm (item) {
        this.setState({ editItemVisible: true, editItem: item })
    }
    
    editItem (item) {
        api.updateItem(item, (error) => {
          error ? this.setState({error}) : this.refreshList()
          this.setState({editItemVisible: false})
        })
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
                
                <div className="column">
                    <div className="field has-addons">
                        <div className="control">
                            <input onChange={this.handleChange} className="input is-large" type="text"  name="Spend amount" placeholder="Enter your budget"/>
                        </div>
                        <div className="control is-centered">
                            <a className="button is-large is-success is-outlined" type="submit" value="=">
                            Budget
                            </a>
                        </div>
                    </div>
                </div>
                
                <br/>
                    <div className="column">
                    <progress className="progress is-danger is-small" value="5" max="100">60%</progress>
                    </div>
                <br/>

                <ItemList 
                refresh={this.refreshList}
                showDetails={this.showDetails}
                items={this.state.items} 
                showEditForm={this.showEditForm.bind(this)}/>
                
                {/* {this.state.detailsVisible && <span> */}
                <ItemDetails isVisible={this.state.detailsVisible} 
                hideDetails={this.hideDetails}
                item={this.state.activeItem} />
                {/* </span>} */}
                
               
                {/* Start of list part */}
                <div className="columns is-gapless is-multiline">

                    <div className="column is-half">
                        <AddItem item={this.item} finishAdd={this.refreshList}/>
                    </div>

                    {/* <div className="column is-half">
                        <Cost cost={this.cost} />
                    </div> */}

                </div>

                <div className="column">
                  <div className="control is-centered">
                    <CompletedButton playing={this.state.playing} startPlaying={this.startPlaying} />
                  </div>
                </div>
            
            </div>
        </Router>
        </div>
    }
}

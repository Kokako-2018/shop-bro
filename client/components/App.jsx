import React from 'react'
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
            <section class="hero is-medium" id="hero-header">
                {/* <!-- Hero head: will stick at the top --> */}
                <div class="hero-head">
                    <nav class="navbar" id="navbar-bottom">
                     <div class="container">
                        <div class="navbar-brand">
                            <div class="container">
                                <h1 class="title is-2" id="title-font">
                                    Shop-Bro
                                </h1>
                            </div>
                            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-active">
                              Settings
                            </a>
                            <a class="navbar-item">
                              Savings
                            </a>
                            <a class="navbar-item">
                              Feedback
                            </a>
                        </div>
                        </div>
                     </div>
                    </nav>
                </div>
                {/* <!-- Hero content: will be in the middle --> */}
                {/* <hr /> */}
                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h2 class="subtitle" id="subtitle">
                    Making sure you stick to your shopping budget so you can smash your savings goals!
                    </h2>
                    </div>
                </div>
            </section>
            
            
            <div class="column">
                <div class="field has-addons">
                    <div class="control is-centered">
                        <input onChange={this.handleChange} class="input" type="text"  name="Spend amount" placeholder="Enter your budget"/>
                    </div>
                    <div class="control">
                        <a class="button" type="submit" value="=">
                        Spend
                        </a>
                    </div>
                </div>
            </div>
            

            <div class="column">
              <progress class="progress is-success is-small" value="5" max="100">60%</progress>
            </div>

            {/* Start of list part */}
            <div class="columns is-gapless is-multiline is-mobile">
              <div class="column is-half">
                <Item item={this.item} />
              </div>
              <div class="column is-half">
                <Cost cost={this.cost} />
              </div>
            </div>
        </div>
    }
}


export default App
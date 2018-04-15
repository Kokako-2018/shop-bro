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
            <section class="hero is-info is-medium">
                {/* <!-- Hero head: will stick at the top --> */}
                <div class="hero-head">
                    <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <div class="container">
                                <h1 class="title is-2">
                                    SHOP-BRO
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
                <hr />
                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h2 class="subtitle">
                    Making sure you stick to your shopping budget so you can smash your savings goals!
                    </h2>
                    </div>
                </div>
            </section>

            {/* Start of list part */}
            <div class="columns is-multiline is-mobile">
              <div class="column">
                <Item item={this.item} />
              </div>
              <div class="column is-one-quarter">
                <Cost cost={this.cost} />
              </div>
            </div>
        </div>
    }
}


export default App
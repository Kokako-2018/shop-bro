import React from 'react'
import Item from './Item'
import Cost from './Cost'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1, item: 'Apples'
        }, {
            id: 100, cost: ''
        }

        this.makeShopForm = this.makeShopForm.bind(this)
        this.makeCostForm = this.makeCostForm.bind(this)
    }

    makeItemForm(item) {
        item.id = item.length + 1
        item.push(item)
        this.setState({item})
    }

    makeCostForm(cost) {
        cost.id = cost.length + 1
        cost.push(cost)
        this.setState({cost})
    }

    render() {
        return <div>
            <h1>Shop-Bro</h1>
            <hr />
            <Item item={this.item} />
            <Cost cost={this.cost} />
            </div>
    }
}


export default App
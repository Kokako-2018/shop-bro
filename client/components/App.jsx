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
            <h1>Shop-Bro</h1>
            <hr />
            <Item item={this.item} />
            {/* <Cost cost={this.cost} /> */}
            </div>
    }
}


export default App
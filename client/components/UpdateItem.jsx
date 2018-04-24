import React from 'react'

import {appendItem} from '../api'

export default class UpdateItem extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            item: props
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, {nextProps})
        this.setState({item: nextProps.item})
    }

    handleChange (e) {
        let newItem = {}
        newItem[e.target.name] = e.target.value
        this.setState ({item: newItem})
    }

    updateItem (e) {
        appendItem(this.state, this.props.finishUpdate)
    }

    render () {
        const {item} = this.state
        console.log(item, 'hello')
        return (
            <div>
                <form>
                    <p>
                        <input name="item" value={item.item} />
                        <input name="cost" value={item.cost} />
                        <button onClick={() =>updateItem(item.id, refresh)} >Update</button>
                    </p>
                </form>
            </div>
        )
    }
}
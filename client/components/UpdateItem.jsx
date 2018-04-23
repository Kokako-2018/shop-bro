import React from 'react'

import {appendItem} from '../api'

export default class UpdateItem extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            item: props.item
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, {nextProps})
        this.setState({item: nextProps.item})
        // this.props = nextProps
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
        return (
            <div className='update-widget'>
                <form>
                    <p>
                        <input name="name" value={item.item} />
                    </p>
                
                </form>
            </div>
        )
    }
}
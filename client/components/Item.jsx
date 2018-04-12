import React from 'react'

class Item extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: ''
        }
    }

    handleChange(e) {
        var key = e.target.name
        this.setState(key)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.makeItemForm(this.state)
    }

    render() {
      return <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="Item" placeholder="Shop Item" />
        <input type="submit" value="Add item"/>
      </form>
    }
}

export default Item
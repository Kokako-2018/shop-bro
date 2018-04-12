import React from 'react'

class Cost extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cost: ''
        }
    }

    handleChange(e) {
        var key = e.target.name
        this.setState(key)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.makeCostForm(this.state)
    }

    render() {
      return <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="Cost" placeholder="Item Cost" />
        <input type="submit" value="Calculate cost"/>
      </form>
    }
}

export default Cost
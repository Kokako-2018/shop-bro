import React from 'react'
import App from './App'

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      item: {...props.item}
    }
    this.updateDetails = this.updateDetails.bind(this)
  }

  updateDetails(e) {
    const {item} = this.state
    item[e.target.name] = e.target.value
    this.setState({item})
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    const {isVisible, hideDetails} = this.props
    const {showForm} = this.state
    console.log(props, 'working')

    return <div>
      {showForm
        ? <form>
          <p>Item: <input onChange={this.updateDetails} name="name" value={item.name} /></p>
          <p>Cost: <input onChange={this.updateDetails} name="price" value={item.price} /></p>
          {/* <button type='button' onClick={this.updateDetails}>Update widget</button> */}
        </form>
        : <div >
          <h2>Details</h2>
          <p>Item: {item.item}</p>
          <p>Cost: {item.cost}</p>
          <a href='#' onClick={hideDetails}>Close</a>
        </div>
      }
      <button onClick={this.toggleForm.bind(this)}>{showForm ? "Hide" : "Edit"}</button>
    </div>
  }
}
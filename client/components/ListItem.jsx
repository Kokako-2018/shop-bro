import React from 'react'
import {deleteItem, updateItem} from '../api'
import App from './App'
import UpdateItem from './UpdateItem'

export default class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            showForm: false,
            // editItem: {...props.item}
            editItem: props.item
        }
        this.toggleForm = this.toggleForm.bind(this)
        this.submitEdit = this.submitEdit.bind(this)
        this.updateEditDetails = this.updateEditDetails.bind(this)
    }

    toggleForm () {
        this.setState({showForm: !this.state.showForm})
    }

    updateEditDetails (e) {
        const {editItem} = this.state
        editItem[e.target.name] = e.target.value
        this.setState({editItem})
    }

    submitEdit(e) {
        e.preventDefault()
        const {editItem} = this.state //this is the edited item
        //submit edited item to the db and refresh list in app
        this.toggleForm()
    }

    render() {
        const {editItem, showForm} = this.state
        const {item} = this.props
        return <div className="content">
            <div className="block">
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        {
                        showForm
                        ? <form className="column is-6 is-mobile"onSubmit={this.submitEdit}>
                            <input name="item" className="input column is-6" type="text" onChange={this.updateEditDetails} value={this.state.editItem.item} />
                            <input name="cost" className="input column is-6" type="text" onChange={this.updateEditDetails} value={this.state.editItem.cost} />
                            <input className="column is-6 button is-primary" type="submit" />
                            <br />
                        </form> 
                        : <ul>
                            <li className="is-size-5 has-text-weight-semibold">Item: {`${item.item}`}</li>
                            <li className="is-size-5">Cost: {`${item.cost}`}</li>
                        </ul>
                        }
                        <button className="button is-warning" onClick={this.toggleForm}>{showForm ? "Cancel" : "Edit"}</button>    
                        <button className="button is-dark" onClick={() =>deleteItem(item.id, refresh)} >Delete</button>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    }
}

// export default function ListItem ({item, refresh}) {

//     return (
//         <div className='content'>
//           <div className="block">
//             <div class="columns">
//                 <div class="column is-half is-offset-one-quarter">
//                     <ul>
//                         <li className="is-size-5 has-text-weight-semibold">Item: {`${item.item}`}</li>
//                         <li className="is-size-5">Cost: {`${item.cost}`}</li>
//                     </ul>
                    
//                     <button className="button is-dark" onClick={() =>deleteItem(item.id, refresh)} >Delete</button>
//                     <br/>
//                 </div>
//             </div>
//           </div>
//         </div>
//     )
// }
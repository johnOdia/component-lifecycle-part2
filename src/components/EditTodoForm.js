import { Component } from 'react'

export class EditTodoForm extends Component{
    render(){
        return (
            <form id='edit'>
                <label htmlFor='title'>Title</label>
                <input id='title' />
                <label htmlFor='description'>Description</label>
                <input id='description' />
                <button onClick={this.props.onClick}>submit</button>
            </form>
        )
    }
}

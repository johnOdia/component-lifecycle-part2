import React, { Component } from 'react'

export class NewTodoForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <input placeholder='title' />
                    <input placeholder='description' />
                    <button onClick={this.props.onClick}>submit</button>
                </form>
            </div>
        )
    }
}
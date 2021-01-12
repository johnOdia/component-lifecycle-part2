import React from 'react'

export class Todo extends React.Component{
    render() {
        return(
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button onClick={this.props.onClick}>Mark</button>
                <button onClick={this.props.onClick}>Remove</button>
                <button onClick={this.props.onClick}>Edit</button>
            </li>
        )
    }
}
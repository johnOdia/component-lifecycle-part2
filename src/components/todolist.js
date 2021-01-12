import React from 'react'
import { Todo } from './todo'
import { NewTodoForm } from './NewTodoForm'
import { EditTodoForm } from './EditTodoForm'
import './style.css'


class Todolist extends React.Component {
    constructor(props){
        super(props)
        this.state = {todos: [{ title: 'prepare a dish', description: 'buy ingredients and cook a meal' }, { title: 'clean the house', description: 'buy detergent and clean the house' }, { title: 'watch a movie', description: 'stream a movie online and watch' }]}

        this.addTodo = this.addTodo.bind(this)
        this.markOrRemove = this.markOrRemove.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }
   
    title = ''

    markOrRemove(e) {
        const el = e.target.parentNode.children[1]
        const editForm = document.getElementById('edit')

        if(e.target.innerText === 'Mark') el.style.textDecoration = 'line-through'

        else if (e.target.innerText === 'Remove') el.parentNode.remove()

        else {  
            editForm.style.display = 'block'
            this.title =  e.target.parentNode.children[0].innerText        
            editForm.children[1].value = e.target.parentNode.children[0].innerText
            editForm.children[3].value = e.target.parentNode.children[1].innerText
        }

    }

    addTodo(e){
        e.preventDefault()
        const el = e.target.parentNode
        const todo = {title:el.children[0].value,description:el.children[1].value}

        const storedTodos = this.state.todos
        storedTodos.push(todo)
        this.setState({todo:storedTodos})
    }

    updateTodo(e){
        e.preventDefault()  
        console.log(this.title) 
        const newTitle = e.target.parentNode.children[1].value
        const newDescription = e.target.parentNode.children[3].value

        const updateTodo = this.state.todos
        console.log(updateTodo)

        updateTodo.map(todo => {
            if(todo.title === this.title){
                console.log('hello');
                
                todo.title = newTitle
                todo.description = newDescription
            }
        })
        this.setState({todo:updateTodo})
        document.getElementById('edit').style.display = 'none'
    }

    render() {        
    let id = 0   
    
    const allTodos = this.state.todos.map(todo => {
        return (
            <Todo key={id++} title={todo.title} description={todo.description} onClick={this.markOrRemove} />
        )
    })
        return (
            <div>
                <ol>{allTodos}</ol>
                <h3>Enter a new Todo:</h3>
                <NewTodoForm onClick={this.addTodo} />
                <EditTodoForm onClick={this.updateTodo} />
            </div>
        )
    }
}

export default Todolist
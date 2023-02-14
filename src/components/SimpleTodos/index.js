import {Component} from 'react'

import TodoItem from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodosLists: initialTodosList}

  onDeleteItem = id => {
    const {TodosLists} = this.state
    const finalTodoList = TodosLists.filter(todo => todo.id !== id)

    this.setState({TodosLists: finalTodoList})
  }

  render() {
    const {TodosLists} = this.state
    return (
      <div className="bgContainer">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="listContainer">
            {TodosLists.map(eachItem => (
              <TodoItem
                TodoList={eachItem}
                key={eachItem.id}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos

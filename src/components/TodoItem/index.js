// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoList, onDeleteItem} = props
  const {title, id} = TodoList

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="listItems">
      <p className="paragraph">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

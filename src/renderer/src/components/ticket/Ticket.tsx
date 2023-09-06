import { IToDo } from '@renderer/types'
import { ToDoList } from '../to-do/ToDoList'
import { useParams } from 'react-router-dom'

const initial_todos: IToDo[] = [
  {
    id: '1',
    label: 'Test',
    checked: true
  },
  {
    id: '2',
    label: 'Another test',
    checked: false
  }
]

export function Ticket() {
  const params = useParams()

  console.log(params)

  return (
    <div>
      <ToDoList initial_todos={initial_todos} />
    </div>
  )
}

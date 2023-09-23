import { IToDo } from '@renderer/types'
import { ToDoList } from '../to-do/ToDoList'
import { useParams } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@renderer/ui/select'

interface ITicket {
  title: string
  description: string
  status: 'incomplete' | 'in progress' | 'complete'
  todos: IToDo[]
}

function getTicket(ticketId: string): ITicket {
  return {
    title: 'Example ticket',
    description: 'This is an example ticket',
    status: 'incomplete',
    todos: [
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
  }
}

export function Ticket() {
  const params = useParams()

  const { id } = params

  if (!id) {
    return <div>Error</div>
  }

  const ticket = getTicket(id)

  const { title, description, status, todos } = ticket

  console.log(params)

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Select>
        <SelectTrigger>Hello</SelectTrigger>
        <SelectContent defaultValue="re">
          <SelectItem value="re">Hello</SelectItem>
          <SelectItem value="rqe">Hmm</SelectItem>
          <SelectItem value="resq">More thigns</SelectItem>
        </SelectContent>
      </Select>
      <ToDoList initial_todos={todos} />
    </div>
  )
}

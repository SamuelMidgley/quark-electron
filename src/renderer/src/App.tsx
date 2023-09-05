import { IToDo } from './types'
import { ToDoList } from './components/to-do/ToDoList'

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

function App(): JSX.Element {
  return <ToDoList initial_todos={initial_todos} />
}

export default App

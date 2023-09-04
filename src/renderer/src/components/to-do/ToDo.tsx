import { CheckCircledIcon, CircleIcon, TrashIcon } from '@radix-ui/react-icons'
import { IToDo } from '@renderer/types'
import { Button } from '@renderer/ui/button'
import { Card } from '@renderer/ui/card'

interface ToDoProps {
  toDo: IToDo
  changeToDoState: (id: string, newState: boolean) => void
  removeToDo: (id: string) => void
}

export function ToDo({ toDo, changeToDoState, removeToDo }: ToDoProps): React.ReactElement {
  const { id, label, checked } = toDo

  return (
    <Card className="mb-2">
      <div className="p-4 flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={(): void => changeToDoState(id, !checked)}>
          {checked ? <CheckCircledIcon className="h-5 w-5" /> : <CircleIcon className="h-5 w-5" />}
        </Button>
        {label}
        <Button
          variant="ghost"
          size="icon"
          onClick={(): void => removeToDo(id)}
          className="ml-auto hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
        >
          <TrashIcon className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  )
}

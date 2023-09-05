import { useState } from 'react'
import { Button } from '@renderer/ui/button'
import { Input } from '@renderer/ui/input'
import { ToDo } from '@renderer/components'
import { IToDo } from '@renderer/types'
import { nanoid } from 'nanoid'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@renderer/ui/accordion'

interface ToDoListProps {
  initial_todos: IToDo[]
}

export function ToDoList({ initial_todos }: ToDoListProps): JSX.Element {
  const [input, setInput] = useState('')
  const [todos, setToDos] = useState(initial_todos)

  function changeToDoState(id: string, newState: boolean): void {
    setToDos((prev) =>
      prev.map((td) => {
        if (td.id === id) {
          return {
            id: td.id,
            label: td.label,
            checked: newState
          }
        }

        return td
      })
    )
  }

  function removeToDo(id: string): void {
    setToDos((prev) => prev.filter((td) => td.id !== id))
  }

  const incomplete = todos.filter((td) => !td.checked)
  const complete = todos.filter((td) => td.checked)

  return (
    <div className="flex flex-col w-full">
      <div className="mx-4 mt-4">
        <h1 className="text-xl font-bold mb-4">To do</h1>
        <div className="flex gap-2 mb-4">
          <label htmlFor="add-to-do" className="sr-only">
            Add to do
          </label>
          <Input
            id="add-to-do"
            value={input}
            onChange={(e): void => setInput(e.currentTarget.value)}
            onKeyDown={(e): void => {
              if (e.key === 'Enter' && input.trim().length > 0) {
                setToDos((prev) => [
                  ...prev,
                  {
                    id: nanoid(),
                    label: input,
                    checked: false
                  }
                ])
                setInput('')
              }
            }}
          />
          <Button
            type="button"
            onClick={(): void => {
              if (input.trim().length > 0) {
                setToDos((prev) => [
                  ...prev,
                  {
                    id: nanoid(),
                    label: input,
                    checked: false
                  }
                ])
                setInput('')
              }
            }}
          >
            Add
          </Button>
        </div>
        <div>
          {incomplete.map((td) => (
            <ToDo key={td.id} toDo={td} changeToDoState={changeToDoState} removeToDo={removeToDo} />
          ))}
          <Accordion type="single" collapsible>
            <AccordionItem value="completed">
              <AccordionTrigger>Completed</AccordionTrigger>
              <AccordionContent>
                {complete.map((td) => (
                  <ToDo
                    key={td.id}
                    toDo={td}
                    changeToDoState={changeToDoState}
                    removeToDo={removeToDo}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

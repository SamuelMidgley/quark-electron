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
import { Progress } from '@renderer/ui/progress'

interface ToDoListProps {
  initial_todos: IToDo[]
}

export function ToDoList({ initial_todos }: ToDoListProps): JSX.Element {
  const [input, setInput] = useState('')
  const [incomplete, setIncomplete] = useState(initial_todos.filter((td) => !td.checked))
  const [complete, setComplete] = useState(initial_todos.filter((td) => td.checked))

  function changeToDoState(toDo: IToDo): void {
    const addToDo = toDo.checked ? setIncomplete : setComplete
    const removeToDo = toDo.checked ? setComplete : setIncomplete

    addToDo((prev) => [
      ...prev,
      {
        ...toDo,
        checked: !toDo.checked
      }
    ])

    removeToDo((prev) => prev.filter((td) => td.id !== toDo.id))
  }

  function removeToDo(id: string, isComplete: boolean): void {
    if (isComplete) {
      setComplete((prev) => prev.filter((td) => td.id !== id))
      return
    }

    setIncomplete((prev) => prev.filter((td) => td.id !== id))
  }

  function addToDo(label: string): void {
    setIncomplete((prev) => [
      ...prev,
      {
        id: nanoid(),
        label,
        checked: false
      }
    ])
  }

  const percentComplete = (complete.length / (complete.length + incomplete.length)) * 100

  return (
    <div className="flex flex-col w-full">
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-4">To do</h1>
        <div className="flex gap-2 mb-8">
          <label htmlFor="add-to-do" className="sr-only">
            Add to do
          </label>
          <Input
            id="add-to-do"
            value={input}
            onChange={(e): void => setInput(e.currentTarget.value)}
            onKeyDown={(e): void => {
              if (e.key === 'Enter' && input.trim().length > 0) {
                addToDo(input)
                setInput('')
              }
            }}
          />
          <Button
            type="button"
            onClick={(): void => {
              if (input.trim().length > 0) {
                addToDo(input)
                setInput('')
              }
            }}
          >
            Add
          </Button>
        </div>
        <div>
          <Progress value={percentComplete} className="mb-8" />
          {incomplete.map((td) => (
            <ToDo key={td.id} toDo={td} changeToDoState={changeToDoState} removeToDo={removeToDo} />
          ))}
          {complete.length > 0 && (
            <Accordion type="single" collapsible defaultValue="completed">
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
          )}
        </div>
      </div>
    </div>
  )
}

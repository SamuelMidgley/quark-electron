import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function App(): JSX.Element {
  const [input, setInput] = useState('')
  const [todos, setToDos] = useState<string[]>(new Array<string>())

  return (
    <div className="flex flex-col w-full">
      <div className="mx-4 mt-4">
        <h1>To do</h1>
        <div className="flex gap-2">
          <label htmlFor="add-to-do" className="sr-only">
            Add to do
          </label>
          <Input
            id="add-to-do"
            value={input}
            onChange={(e): void => setInput(e.currentTarget.value)}
            onKeyDown={(e): void => {
              if (e.key === 'Enter') {
                setToDos((prev) => [...prev, input])
                setInput('')
              }
            }}
          />
          <Button
            type="button"
            onClick={(): void => {
              setToDos((prev) => [...prev, input])
              setInput('')
            }}
          >
            Add
          </Button>
        </div>
        <div className="flex-1">
          {todos.map((td) => (
            <div key={td}>{td}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

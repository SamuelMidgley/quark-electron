import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Kanban } from './components/kanban/Kanban'
import { NavBar, Settings, Ticket } from './components'
import { cn } from '@renderer/lib/utils'
import { buttonVariants } from './ui/button'
import { CrumpledPaperIcon, GearIcon } from '@radix-ui/react-icons'
import { Separator } from './ui/separator'

function App(): JSX.Element {
  return (
    <div className="py-4">
      <HashRouter>
        <header className="flex items-center px-8 mb-4">
          <Link to="/" className="flex items-center mr-4">
            <CrumpledPaperIcon className="h-5 w-5 mr-2" />
            <p className="text-xl font-extrabold">Quark</p>
          </Link>
          <NavBar />
          <Link
            to="/settings"
            className={cn('ml-auto', buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <span className="sr-only">Open settings</span>
            <GearIcon className="h-5 w-5" />
          </Link>
        </header>
        <Separator />
        <main className="px-8">
          <Routes>
            <Route path="/" Component={Kanban} />
            <Route path="/ticket/:id" Component={Ticket} />
            <Route path="/settings/*" Component={Settings} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  )
}

export default App

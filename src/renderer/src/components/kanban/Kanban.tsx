import { buttonVariants } from '@renderer/ui/button'
import { Link } from 'react-router-dom'

export function Kanban() {
  return (
    <div>
      <Link to="/ticket/2" className={buttonVariants({ variant: 'default' })}>
        Dab
      </Link>
    </div>
  )
}

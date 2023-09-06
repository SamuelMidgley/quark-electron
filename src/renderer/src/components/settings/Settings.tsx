import { Separator } from '@renderer/ui/separator'
import { Route, Routes } from 'react-router-dom'
import { Appearance } from './Appearance'
import { SidebarNav } from '../side-bar-nav/SideBarNav'
import { Profile } from './Profile'
import { Account } from './Account'
import { Notifications } from './Notifications'
import { Display } from './Display'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings'
  },
  {
    title: 'Account',
    href: '/settings/account'
  },
  {
    title: 'Appearance',
    href: '/settings/appearance'
  },
  {
    title: 'Notifications',
    href: '/settings/notifications'
  },
  {
    title: 'Display',
    href: '/settings/display'
  }
]

export function Settings() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <Routes>
            <Route path="" Component={Profile} />
            <Route path="/account" Component={Account} />
            <Route path="/appearance" Component={Appearance} />
            <Route path="/notifications" Component={Notifications} />
            <Route path="/display" Component={Display} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

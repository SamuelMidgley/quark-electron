import { Separator } from '@renderer/ui/separator'

interface SettingsHeaderProps {
  title: string
  description: string
  children: React.ReactNode
}

export function SettingsHeader({ title, description, children }: SettingsHeaderProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Separator />
      {children}
    </div>
  )
}

import { create } from 'zustand'

type ThemeColor = 'zinc' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'violet'
type ThemeMode = 'light' | 'dark'
type ThemeRadius = 0 | 0.5 | 1

interface ThemeState {
  color: ThemeColor
  mode: ThemeMode
  radius: ThemeRadius
  setMode: (mode: ThemeMode) => void
  setColor: (color: ThemeColor) => void
  setRadius: (radius: ThemeRadius) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  color: 'zinc',
  mode: 'dark',
  radius: 0.5,
  setMode: (mode: ThemeMode) => set((state) => ({ ...state, mode })),
  setColor: (color: ThemeColor) => set((state) => ({ ...state, color })),
  setRadius: (radius: ThemeRadius) => set((state) => ({ ...state, radius }))
}))

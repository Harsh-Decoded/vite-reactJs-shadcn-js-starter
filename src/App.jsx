import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen flex flex-col justify-center items-center">
        <a 
          href="https://github.com/Harsh-Decoded/vite-reactJs-shadcn-js-starter" 
          className="underline underline-offset-2 p-2 text-blue-600">
            GitHub Repository
        </a>
        <h1 className="font-medium p-2">Shadcn Dark Button</h1>
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App

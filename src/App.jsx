import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen flex justify-center items-center">
        <ModeToggle/>
      </div>
    </ThemeProvider>
  )
}

export default App

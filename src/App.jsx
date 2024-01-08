import Background from "./components/Background"
import UpperBackground from "./components/UpperBackground"

const App = () => {
  return (
    <div className="relative max-w-[100vw] min-h-[100vh] bg-zinc-800">
      <Background />
      <UpperBackground />
    </div>
  )
}

export default App
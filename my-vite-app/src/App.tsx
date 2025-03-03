import { Route, Routes } from 'react-router-dom'
import StartPage from './StartPage/page'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </>
  )
}

export default App

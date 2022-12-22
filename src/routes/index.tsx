import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import UseMountExample from './UseMountExample'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/use-mount' element={<UseMountExample />} />
      </Routes>
    </div>
  )
}

export default App

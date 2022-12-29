import { Routes, Route } from 'react-router-dom'

import Home from 'routes/Home'
import UseMountExample from 'routes/examples/UseMountExample'
import UseUnmountExample from 'routes/examples/UseUnmountExample'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/use-mount' element={<UseMountExample />} />
        <Route path='/use-unmount' element={<UseUnmountExample />} />
      </Routes>
    </div>
  )
}

export default App

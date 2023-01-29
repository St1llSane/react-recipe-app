import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'

const Pages = () => {
  return (
    <Routes className="pages">
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  )
}

export default Pages

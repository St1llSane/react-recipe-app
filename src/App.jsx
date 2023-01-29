import { BrowserRouter } from 'react-router-dom'
import Categories from './components/Categories'
import Pages from './pages/Pages'
import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Categories />
        <Pages />
      </div>
    </BrowserRouter>
  )
}

export default App

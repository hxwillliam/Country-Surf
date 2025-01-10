import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<div>Country Details Page</div>} />
      </Routes>
    </Layout>
  )
}

export default App
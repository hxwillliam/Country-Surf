import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/country/:name" element={<div>Country Details Page</div>} />
      </Routes>
    </Layout>
  )
}

export default App
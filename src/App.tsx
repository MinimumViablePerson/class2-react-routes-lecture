import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Basket } from './pages/Basket'
import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'
import { Store } from './pages/Store'
import { StoreItem } from './pages/StoreItem'

function App () {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:itemId' element={<StoreItem />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

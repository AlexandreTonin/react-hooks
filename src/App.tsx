// import Gallery from "./components/Gallery/Gallery"
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {
  return (
    <>
      <Header></Header>
      <main className='container mx-auto py-12'>
        <Outlet />
      </main>
    </>

  )
}

export default App

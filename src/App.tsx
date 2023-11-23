// import Gallery from "./components/Gallery/Gallery"
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import FloatingButton from './components/FloatingButton/FloatingButton'
import Lottie from 'lottie-react'
import githubAnimation from '../public/github.json'


function App() {
  return (
    <>
      <Header />

      <main className='container mx-auto'>
        <Outlet />
      </main>

      <div className='absolute lg:bottom-12 lg:right-12 bottom-4 right-4'>
        <FloatingButton href="https://github.com/alexandretonin">
          <Lottie animationData={githubAnimation} alt="" className='w-8' />
        </FloatingButton>
      </div>
    </>

  )
}

export default App

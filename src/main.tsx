import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UseStateHook from './pages/usestatehook/UseStateHook.tsx'
import Gallery from './components/Gallery/Gallery.tsx'
import UseEffectHook from './pages/useEffectHook/UseEffectHook.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Gallery />,
      },
      {
        path: "/useState",
        element: <UseStateHook />,
      },
      {
        path: "/useEffect",
        element: <UseEffectHook />,
      },
      {
        path: "/use",
        element: <UseStateHook />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

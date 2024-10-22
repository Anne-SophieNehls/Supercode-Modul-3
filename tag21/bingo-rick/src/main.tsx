import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BingoPage from './pages/BingoPage'
import CharacterDetailPage from './pages/CharacterDetailPage'



const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/bingo",
        element: <BingoPage/>
      },
      {
        path: "/character/:id",
        element: <CharacterDetailPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

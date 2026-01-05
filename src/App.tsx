import { createBrowserRouter, RouterProvider } from 'react-router'
import { FintechPage, LandingPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/fintech',
    element: <FintechPage />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
import { createBrowserRouter, RouterProvider } from 'react-router'
import { LandingPage } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
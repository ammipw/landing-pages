import { createBrowserRouter, RouterProvider } from 'react-router'
import { Fintech, Landing } from './projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/fintech',
    element: <Fintech />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
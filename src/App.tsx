import { createBrowserRouter, RouterProvider } from 'react-router'
import { Dribbble, Fintech } from './projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dribbble />,
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
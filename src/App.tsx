import { createBrowserRouter, Link, RouterProvider } from 'react-router'
import { DribbbleHome, DribbbleSearch } from './projects/Dribbble'
import Ammi from './projects/Ammi'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ammi',
    element: <Ammi />,
  },
  {
    path: '/dribbble',
    element: <DribbbleHome />,
  },
  {
    path: '/dribbble/search',
    element: <DribbbleSearch />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <h2>Live Demos</h2>
      <ul>
        <li><Link to="/ammi">Ammi</Link></li>
        <li>
          Dribbble
          <ul>
            <li><Link to="/dribbble">Landing</Link></li>
            <li><Link to="/dribbble/search">Search</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
import { createBrowserRouter, Link, RouterProvider } from 'react-router'
import { Landing, Search } from './Rebuilds/dribbble'
import Ammi from './Rebuilds/ammi'

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
    element: <Landing />,
  },
  {
    path: '/dribbble/search',
    element: <Search />,
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
          <li><Link to="/dribbble">Dribbble</Link></li>
          <ul>
            <li><Link to="/dribbble/search">/search</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
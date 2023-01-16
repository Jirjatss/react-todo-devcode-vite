import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/Tailwind.css'
import Home from './routes/Home';
import ItemList from './routes/ItemList';
import Root from './routes/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "detail/:id",
          element: <ItemList />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

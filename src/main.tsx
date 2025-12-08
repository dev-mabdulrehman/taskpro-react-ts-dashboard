import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import routes from './routes'

import './assets/css/index.css'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />,
)

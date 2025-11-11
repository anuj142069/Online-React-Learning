import { StrictMode } from 'react'
import CreatePost from './components/CreatePost.jsx'
import { createRoot } from 'react-dom/client'
import './routes/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx'
import PostList from './components/PostList.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, children: [
        {
          path: "/",
          element: <PostList/>
        },
        {
          path: "/create-post",
          element: <CreatePost/>,
        },
      ],
    },
    {
      path: "/create-post",
      element: <CreatePost/>,
    },
    {
      path: "/",
      element: <App/>
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)

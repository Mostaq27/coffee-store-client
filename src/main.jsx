import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';
import Main from './Layout/Main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // loader: () => fetch('https://coffee-store-server-342e4j5i6-md-mostaq-muzahid-moins-projects.vercel.app/Coffee'),
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-eta-five.vercel.app/Coffee'),

      },
      {
        path: '/addCoffee',
        element: <AddCoffee />
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-eta-five.vercel.app/Coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-eta-five.vercel.app/user')
      }
    ]
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)

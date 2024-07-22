import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/product'
import Contact from './components/contact'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login';
import Todo from './components/Todo';
import Tictactoe from './Tictactoe/Game';
import Mui from './Mui/mui';
import Chat from './components/chat';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Category from './Taskmanager/Category';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<> 404 Not found</>,
    children: [
      {
        path: '/product',
        element: <Product/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/todo',
        element: <Todo/>
      },
      {
        path: '/tictactoe',
        element: <Tictactoe/>
      },
      {
        path: '/mui',
        element: <Mui/>
      },
      {
        path: '/chat',
        element: <Chat/>
      },
      {
        path: '/taskmanager',
        element: <Category/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  }


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
    <App />
    </RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

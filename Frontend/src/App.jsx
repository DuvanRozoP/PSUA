// HOOKS
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//PAGES
import Login from './pages/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>,
      children:[
        // Next routes
      ]
    }
  ])
  return <RouterProvider router = {router}/>;
}

export default App;

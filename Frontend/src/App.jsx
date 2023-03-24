// ~ HOOKS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
//PAGES
import Login from './pages/Login/Login';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
  ]);
  return <RouterProvider router={router} />
}

export default App;

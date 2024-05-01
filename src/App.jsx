import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />;
    </>
  )

}

export default App;
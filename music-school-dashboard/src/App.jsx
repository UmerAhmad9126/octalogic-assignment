// import './App.css'
import AllRoutes from './Routes/AllRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position="bottom-right" />
      <AllRoutes />
    </>
  )
}

export default App

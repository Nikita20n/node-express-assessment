import { Routes,Route } from 'react-router'
import Home from "./Home";
import Login from './Login';
import Dashboard from './Admin/Dashboard';
import Add_service from './Admin/Add_service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateService from './Admin/UpdateService';
function App() {
 return (
    <>
      <div>
        <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/add_service" element={<Add_service></Add_service>}></Route>
        <Route path="/services/:id" element={<UpdateService />}></Route>
      </Routes>

      </div>
    
    </>
  )
}

export default App

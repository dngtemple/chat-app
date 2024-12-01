
import './App.css'
import Login from './pages/login.jsx'
import Signup from "./pages/signup.jsx"
import Home from "./pages/home.jsx"
import {Toaster} from "react-hot-toast"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { useAuthContext } from './context/authContext.jsx'

function App() { 
  const {authUser}=useAuthContext()


  return (

    <>
     <div className='flex p-3 h-screen items-center justify-center'>
     <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}>

          </Route>
          <Route path='/login' element={authUser ? <Navigate to={"/"}/>: <Login/>}>

          </Route>
          <Route path='/signup' element={authUser ? <Navigate to={"/"}/>: <Signup/>}> 

          </Route>
        </Routes>
      </BrowserRouter>


     </div>
    </>
  )
}

export default App

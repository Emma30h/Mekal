import { Route, Routes} from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./components/ProtectRoutes";

//STYLE
import "./App.css"

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route 
            path='/' 
            element={
              <ProtectedRoutes>
                <Home/>
                </ProtectedRoutes>
              }
            />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </>  
  )
}

export default App

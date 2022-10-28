import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Navbar from "./component/Navbar";
import { useAuthHook } from "./hooks/useAuthHook"


function App() {

  const { user } = useAuthHook()

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <div className="pages">
      <Routes>
        <Route 
          path="/"
          element={user ? <Home/> : <Navigate to= "/login"/>}
        />
         <Route 
          path="/signup"
          element={!user ? <SignUp/> : <Navigate to= "/"/>}
        />
        <Route 
          path="/login"
          element={!user ? <LogIn/> : <Navigate to= "/"/>}
        />
      </Routes>
      </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;


import Index from './pages/Index';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Index/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/login" element= {<Login/>}/>
        <Route path="forgotpassword" element= {<ForgotPassword/>}/>
        <Route path="/register" element= {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
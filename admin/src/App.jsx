import { BrowserRouter,Routes, Route } from "react-router-dom";
import MyHeader from './components/MyHeader';
import HomePage from './pages/HomePage';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function App() {
return (
<>
<div className="App">
<BrowserRouter>
<MyHeader />
<Routes>
<Route path="/" element={<HomePage />} />
</Routes>
</BrowserRouter>
</div>
<ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable theme="dark"/>
</>
  )
}

export default App

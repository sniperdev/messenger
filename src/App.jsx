import "./App.css";
import ForgotPasswordPage from "./ForgotPassword/ForgotPasswordPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./configs/PrivateRoutes.jsx";
import MainApp from "./App/MainApp.jsx";
import Login from "./Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/app" element={<MainApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import LoginPage from "./components/LoginPage";
import { LoginProvider } from "./context/LoginContext.jsx";
import ForgotPasswordPage from "./components/ForgotPasswordPage.jsx";

function App() {
  return (
    <div>
      <LoginProvider>
        <LoginPage />
      </LoginProvider>
      <ForgotPasswordPage />
    </div>
  );
}

export default App;

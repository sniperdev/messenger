import "./App.css";
import LoginPage from "./components/LoginPage";
import { LoginProvider } from "./context/LoginContext.jsx";

function App() {
  return (
    <div>
      <LoginProvider>
        <LoginPage />
      </LoginProvider>
    </div>
  );
}

export default App;

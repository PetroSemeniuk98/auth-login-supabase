import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
export default App;

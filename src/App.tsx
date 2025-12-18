import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Routes
      >
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<Layout />}>
          {/* <Route index element={} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

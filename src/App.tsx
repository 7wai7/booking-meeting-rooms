import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./pages/Layout";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <>
      <Routes
      >
        <Route path="/auth" element={<AuthForm />} />

        <Route path="/" element={<Layout />}>
          {/* <Route index element={} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

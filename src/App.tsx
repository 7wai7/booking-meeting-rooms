import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import MeetingRoomsPage from "./pages/MeetingRoomsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import BookingsPage from "./pages/BookingsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Main />} /> */}
            <Route path="/rooms" element={<MeetingRoomsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

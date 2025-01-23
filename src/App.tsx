import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ErrorPage />} path="*"></Route>
        <Route element={<LoginPage />} path="/"></Route>
        <Route element={<LoginPage />} path="/home"></Route>
      </Routes>
    </BrowserRouter>
  );
}

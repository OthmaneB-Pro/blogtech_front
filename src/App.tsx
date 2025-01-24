import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import HomePage from "./components/pages/home/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ErrorPage />} path="*"></Route>
        <Route element={<LoginPage />} path="/"></Route>
        <Route element={<HomePage />} path="/home"></Route>
      </Routes>
    </BrowserRouter>
  );
}

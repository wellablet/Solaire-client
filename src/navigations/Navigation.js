import { Routes, Route, Navigate } from "react-router-dom";
import { WelcomePage, AuthPage, HomePage } from "../pages";


const Empty = () => {
  return <div>
    <h1>Empty</h1>
  </div>
};

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;
  return children;
};


function Navigation() {
  return (
    <Routes>
      <Route path="/users/sign_in" element={
        <ProtectedRoute>
          <AuthPage />
        </ProtectedRoute>
      } />
      <Route path="/users/sign_up" element={
        <ProtectedRoute>
          <AuthPage />
        </ProtectedRoute>
      } />
      <Route
        path="/welcome"
        element={<WelcomePage />}
      />
      <Route
        path="/"
        element={<HomePage />}
      />
    </Routes>
  );
}

export default Navigation;
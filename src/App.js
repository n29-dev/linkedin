import "./App.css";
import AuthProvider from './contexts/AuthContext';
import SignIn from "./pages/SignIn";
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/misc/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from "./components/misc/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <PrivateRoute redirectPath="/signin">
              <Home />
            </PrivateRoute>
          } />
          <Route path="/signin" element={
            <PublicRoute redirectPath="/">
              <SignIn />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute redirectPath="/">
              <SignUp />
            </PublicRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

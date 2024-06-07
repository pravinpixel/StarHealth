import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './Global.css';
import './responsive.css';
import SplashLoader from "./components/loader/splashLoader";

// auth pages
const SplashComponent = lazy(() => import("./pages/auth/index"));
const LoginComponent = lazy(() => import("./pages/auth/login"));

// admin pages
const PersonalDetailsComponent = lazy(() => import("./pages/admin/personalDetails"));
const ThankyouScreen = lazy(() => import("./pages/admin/thanks"));

function App() {
  return (
    <Suspense fallback={<SplashLoader />}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SplashComponent />}
          />
          <Route
            path="/auth/login"
            element={<LoginComponent />}
          />
          <Route
            path="/admin/personal-details"
            element={<PersonalDetailsComponent />}
          />
          <Route
            path="/admin/thank-you"
            element={<ThankyouScreen />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

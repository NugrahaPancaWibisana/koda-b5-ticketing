import { Routes, Route } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import MovieList from "./pages/guest/MovieList";
import AuthLayout from "./components/layouts/AuthLayout";

export default function Router() {
  return (
    <Routes>
      <Route path='/'>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='movie'>
            <Route index element={<MovieList />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

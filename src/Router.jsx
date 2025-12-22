import { Routes, Route } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import MovieList from "./pages/guest/MovieList";
import AuthLayout from "./components/layouts/AuthLayout";
import MovieDetail from "./pages/guest/MovieDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movies">
            <Route index element={<MovieList />} />
            <Route path=":id">
              <Route path=":slug" element={<MovieDetail />} />
            </Route>
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div className="flex h-dvh items-center justify-center text-5xl font-bold">
            404 NOT FOUND
          </div>
        }
      />
    </Routes>
  );
}

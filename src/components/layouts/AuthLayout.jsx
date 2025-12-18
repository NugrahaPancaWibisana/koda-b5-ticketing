import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import Loader from "../ui/Loader";

export default function AuthLayout() {
  const userState = useSelector((state) => state.user);

  return (
    <>
      {userState.fetchStatus.users.signin.isLoading && <Loader />}
      {userState.fetchStatus.users.signup.isLoading && <Loader />}
      <main className='font-mulish bg-[url("/background.png")] bg-center bg-cover relative z-0 before:content-[""] before:absolute before:bg-black/65 before:inset-0 before:-z-10'>
        <Outlet />
      </main>
    </>
  );
}

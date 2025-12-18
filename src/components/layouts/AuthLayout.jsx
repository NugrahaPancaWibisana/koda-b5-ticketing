import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import Loader from "../ui/Loader";

export default function AuthLayout() {
  const userState = useSelector((state) => state.user);

  return (
    <>
      {userState.fetchStatus.signin.isLoading && <Loader />}
      {userState.fetchStatus.signup.isLoading && <Loader />}
      <main className='font-mulish relative z-0 bg-[url("/background.png")] bg-cover bg-center before:absolute before:inset-0 before:-z-10 before:bg-black/65 before:content-[""]'>
        <Outlet />
      </main>
    </>
  );
}

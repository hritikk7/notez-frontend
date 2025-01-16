"use client";

import {
  SignedOut,
  useUser,
  SignedIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="p-5 flex items-center justify-between">
      {user && (
        <h1 className="text-xl">
          {user.firstName}
          {`'s`} Space
        </h1>
      )}
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton  />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
